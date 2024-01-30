import json

# Load korean-numbers.json
with open('korean-numbers.json', 'r') as f:
    korean_numbers = json.load(f)

# Load sino_korean-numbers.json
with open('sino_korean-numbers.json', 'r') as f:
    sino_korean_numbers = json.load(f)

# Combine the two dictionaries into a list of dictionaries
combined = []
for key in sino_korean_numbers.keys():
    combined.append({
        'number': int(key),
        'korean': korean_numbers[key] if key in korean_numbers else None,
        'sinoKorean': sino_korean_numbers[key]
    })

# Write the combined data to a new JSON file
with open('combined.json', 'w') as f:
    json.dump(combined, f, ensure_ascii=False)