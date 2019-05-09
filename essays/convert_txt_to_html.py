"""Convert a text document in the form of my essays to """
import argparse

import jinja2

HTML_TEMPLATE = jinja2.Template('''
<h1>{{title}}</h1>

{% for line in description %}
    <p>{{ line }}</p>
{% endfor %}

{% for header in headers %}
    <h3>{{header}}<h3>
    {% for paragraph in paragraphs[header] %}
        <p>{{paragraph}}</p>
    {% endfor %}
{% endfor %}
''')


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument('file', help='the file to convert')
    return parser.parse_args()


def convert_to_html(input_file_name):
    title = ''
    description = []
    headers = []
    paragraphs = {}
    current_header = ''

    with open(file=input_file_name, encoding='utf-8') as input_file:
        for index, line in enumerate(input_file.readlines()):
            line = line.strip()
            if index == 0:
                title = line
            if not line.startswith('#') and line and not headers:
                if line != title and not line.startswith('='):
                    description.append(line)

            line = line.strip()
            if line.startswith("#"):
                header = line.strip("#").lstrip()
                headers.append(header)
                current_header = header
            else:
                if current_header not in paragraphs:
                    paragraphs[current_header] = []
                if line:
                    paragraphs[current_header].append(line)

    output_html = HTML_TEMPLATE.render(title=title, description=description, headers=headers, paragraphs=paragraphs)
    print(output_html)


if __name__ == '__main__':
    args = parse_args()
    convert_to_html(input_file_name=args.file)
