import pandas as pd
import json
import argparse

def json_to_excel(json_file, excel_file):
    with open(json_file, 'r') as f:
        data = json.load(f)
    df = pd.DataFrame(data)
    df.to_excel(excel_file, index=False)

def excel_to_json(excel_file, json_file):
    df = pd.read_excel(excel_file)
    data = df.to_dict(orient='records')
    with open(json_file, 'w') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Convert JSON to Excel and vice versa.')
    parser.add_argument('--json', help='The JSON file to convert to Excel.')
    parser.add_argument('--excel', help='The Excel file to convert to JSON.')
    args = parser.parse_args()

    if args.json:
        json_to_excel(args.json, 'output.xlsx')
    if args.excel:
        excel_to_json(args.excel, 'output.json')