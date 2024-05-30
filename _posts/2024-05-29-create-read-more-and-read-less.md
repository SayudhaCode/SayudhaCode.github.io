---
title: Create Read More and Read Less Using JavaScript
date: 2024-05-29
categories: javascript
image: /assets/images/posts/read-more.webp
---

On some cases you need to make Read More button and Read Less button using JavaScript but you have no idea how to make it. So, the code snippet below is how I make the simple Read More and Read Less functionality using JavaScript.

```javascript
function charSplit() {
  const maxChar = 330;

  $(".text").each(function () {
    const text = $(this).html();
    const textSplit = text.substring(0, maxChar);

    if (text.length > maxChar) {
      const hiddenText = text.substring(maxChar);
      $(this).html(
        textSplit +
          '<a href="#" class="read-more">...(read more)</a><span class="more-text" style="display: none;">' +
          hiddenText +
          '</span><a href="#" class="read-less" style="display: none;">...(read less)</a>'
      );
    }
  });

  $(document).on("click", ".read-more", function (e) {
    e.preventDefault();
    $(this).hide();
    $(this).siblings(".more-text, .read-less").show();
  });

  $(document).on("click", ".read-less", function (e) {
    e.preventDefault();
    $(this).hide();
    $(this).siblings(".more-text").hide();
    $(this).siblings(".read-more").show();
  });
}
```

You can always change and modified the code snippets above and mix match it based on your cases. But the general idea is 
1. splitting the text using `substring()`, 
2. hide it but saved it in a variable named `hiddenText`, 
3. click the button, show the `hiddenText`
4. change the `Read More` into `Read Less`,
5. vice versa

I hope this helps! If you need assistance, feel free to ask me on the comment section below.