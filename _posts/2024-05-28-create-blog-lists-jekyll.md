---
title: How to create blog lists in Jekyll
date: 2024-05-28
categories: jekyll
image: /assets/images/posts/blog-list.webp
---

If you just start building static site generator like Jekyll as your blog site, making a lists of your blog is a must and for those who wonder how to do it in a Jekyll liquid code, it is pretty easy. Below is the steps and the code snippets for you to modify.

Steps to create a blog lists in Jekyll:

1. Create a new HTML file for your blog list. You can name it `blog.html`
2. In this file, make your blog list layout as you wanted.
3. and for the blog lists part you can use loop post from Jekyll which is `site.posts`, inside the loop is your blog lists structures.
4. ok, this is the code snippet example, so you will not get confused:

```html
---
layout: default
---

<div class="wrapper">
  <!-- Section Blog List -->
  <section class="section section-inner blog-list">
    <!-- Blog Posts -->
      {% raw %}
      {% for post in site.posts %}
        <div class="blog-post">
            <h2 class="post-title"><a href="{{ post.url }}">{{ post.title }}</a></h2>
            <p class="post-meta">Posted on {{ post.date | date: "%B %d, %Y" }} by {{ post.author }}</p>
            <p class="post-summary">{{ post.excerpt }}</p>
        </div>
      {% endfor %}
      {% endraw %}
  </section>
</div>
```

The code snippets above will iterate to all of our blog posts. For example, if you have 10 blog posts, you will have 10 `<div class="blog-post">` in your HTML.

`post.title` will return the post title, `post.date` will return the post publish date with format of "Month Day, Year", `post.excerpt` will return the post excerpt that Jekyll automatically generates from the first paragraph of the post.

This is the basic of how you make a blog lists for your Blog page using Jekyll. If you want get more advanced you can modify this code snippets as you like, mix and match it with some JavaScript and other Jekyll plugins.

Hope this helps!