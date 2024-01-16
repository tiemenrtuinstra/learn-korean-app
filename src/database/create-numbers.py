import json

# Korean numbers from 1 to 10
korean_numbers = ["하나", "둘", "셋", "넷", "다섯", "여섯", "일곱", "여덟", "아홉", "열"]
korean_numbers_romanisation = ["hana", "dul", "set", "net", "daseot", "yeoseot", "ilgop", "yeodeol", "ahop", "yeol"]

# Sino-Korean numbers from 1 to 10
sino_korean_numbers = ["일", "이", "삼", "사", "오", "육", "칠", "팔", "구", "십"]
sino_korean_numbers_romanisation = ["il", "i", "sam", "sa", "o", "yuk", "chil", "pal", "gu", "sip"]

# Sino-Korean numbers for 100 and 1000
sino_korean_hundreds_thousands = ["백", "천"]
sino_korean_hundreds_thousands_romanisation = ["baek", "cheon"]

numbers = []

for i in range(1, 2001):
    if i <= 100:
        tens = i // 10
        ones = i % 10
        numbers.append({
            "number": i,
            "korean": f"{korean_numbers[tens-1]} {korean_numbers[9]}" if tens > 1 else "" +
                          f"{korean_numbers[9]}" if tens == 1 else "" +
                          f"{korean_numbers[ones-1]}" if ones > 0 else "",
            "koreanRomanisation": f"{korean_numbers_romanisation[tens-1]} {korean_numbers_romanisation[9]}" if tens > 1 else "" +
                                      f"{korean_numbers_romanisation[9]}" if tens == 1 else "" +
                                      f"{korean_numbers_romanisation[ones-1]}" if ones > 0 else "",
            "sinoKorean": f"{sino_korean_numbers[tens-1]} {sino_korean_numbers[9]}" if tens > 1 else "" +
                          f"{sino_korean_numbers[9]}" if tens == 1 else "" +
                          f"{sino_korean_numbers[ones-1]}" if ones > 0 else "",
            "sinoKoreanRomanisation": f"{sino_korean_numbers_romanisation[tens-1]} {sino_korean_numbers_romanisation[9]}" if tens > 1 else "" +
                                      f"{sino_korean_numbers_romanisation[9]}" if tens == 1 else "" +
                                      f"{sino_korean_numbers_romanisation[ones-1]}" if ones > 0 else "",
        })
    else:
        thousands = i // 1000
        hundreds = (i % 1000) // 100
        tens = (i % 100) // 10
        ones = i % 10
        numbers.append({
            "number": i,
            "korean": None,
            "koreanRomanisation": None,
            "sinoKorean": f"{sino_korean_numbers[thousands-1]} {sino_korean_hundreds_thousands[1]}" if thousands > 0 else "" +
                          f"{sino_korean_numbers[hundreds-1]} {sino_korean_hundreds_thousands[0]}" if hundreds > 0 else "" +
                          f"{sino_korean_numbers[tens-1]} {sino_korean_numbers[9]}" if tens > 0 else "" +
                          f"{sino_korean_numbers[ones-1]}" if ones > 0 else "",
            "sinoKoreanRomanisation": f"{sino_korean_numbers_romanisation[thousands-1]} {sino_korean_hundreds_thousands_romanisation[1]}" if thousands > 0 else "" +
                                      f"{sino_korean_numbers_romanisation[hundreds-1]} {sino_korean_hundreds_thousands_romanisation[0]}" if hundreds > 0 else "" +
                                      f"{sino_korean_numbers_romanisation[tens-1]} {sino_korean_numbers_romanisation[9]}" if tens > 0 else "" +
                                      f"{sino_korean_numbers_romanisation[ones-1]}" if ones > 0 else "",
        })

with open('numbers.json', 'w') as f:
    json.dump(numbers, f, ensure_ascii=False, indent=4)