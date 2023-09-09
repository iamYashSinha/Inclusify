import requests
from bs4 import BeautifulSoup
import json

url = "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2334524.m570.l1313&_nkw=leg+disability&_sacat=0&LH_TitleDesc=0&_odkw=hand+disability+&_osacat=0"
response = requests.get(url)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, "html.parser")
    product_elements = soup.find_all(class_="s-item")

    data = []

    for element in product_elements:
        product_name = element.find(class_="s-item__title").text.strip()
        product_price = element.find(class_="s-item__price").text.strip()
        product_image = element.find(class_="s-item__image-wrapper").find("img")["src"].strip()

        product_info = {
            "Product Name": product_name,
            "Product Price": product_price,
            "Image URL": product_image
        }

        data.append(product_info)

    with open("Leg_Disability_Products.json", "w", encoding="utf-8") as json_file:
        json.dump(data, json_file, indent=4, ensure_ascii=False)

    print("Data has been scraped and saved in JSON format.")
else:
    print("Failed to retrieve the web page.")
