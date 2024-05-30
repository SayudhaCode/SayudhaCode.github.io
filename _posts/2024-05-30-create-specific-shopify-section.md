---
title: Create Shopify Section specific to a page
date: 2024-05-30 04:40:00 +0700
categories: shopify
image: /assets/images/posts/shopify-section.webp
---

Sometimes you want to create a section but specific to a page, you do not want other pages install this section but you do not know how. Here is how I've done it to create a Shopify Section that can only be accessed in a specific page you choose.

To create a Shopify section that doesn’t appear on every page, you’ll need to follow these steps:

1. Create a New Page Template:
	- Shopify uses templates to determine how pages are structured. By creating a new template, you can customize the layout for specific pages.
	- Go to your Shopify admin dashboard and navigate to Online Store > Themes.
	- Click on the Actions button next to your current theme and select Edit code.
	- In the Templates folder, create a new file (e.g., page.my-custom-template.liquid).
	- Customize this template to your liking by adding or removing sections as needed.
<br>
2. Modify Your Section Liquid Files:
	- For each section that you want to be available only on specific page templates, follow these steps:
	- Open the section’s liquid file (e.g., my-section.liquid).
	- Scroll down to the bottom of the file within the {% raw %} {% schema %} {% endraw %}block.
	- Add "page" to the templates list. For example:

	```
	{
		"name": "My Custom Section",
		"settings": [],
		"presets": [],
		"templates": ["page"],  // Add "page" here
		"icon": "image"
	}
	```

	- Save the changes.
<br>
3. Assign the New Template to Your Page:
	- Go back to your Shopify admin dashboard and create a new page.
	- In the page editor, select the newly created template from the Template dropdown.
	- Customize the content for this specific page.
	- Save the page.

Now your custom section will only appear on the pages using the specified template. If you encounter any issues, feel free to ask me on the comment section below.

Also if you want more detailed about creating Shopify Section you can always look the Shopify Documentation in [Shopify documentation on section schemas.12](https://community.shopify.com/c/shopify-design/whenever-i-add-a-section-to-a-blank-page-i-made-it-appears-on/m-p/1662929). The Shopify documentation are very detailed from A to Z.