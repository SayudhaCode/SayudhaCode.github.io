const grayMatter = require('gray-matter');
const fs = require('fs');
const md5 = require('md5');

// Get all the markdown files in your _posts folder
const files = fs.readdirSync('_posts');

const posts = [];
const hashes = {};

function updateJson() {
  let changed = false;

  // Loop through each file
  files.forEach(function (file) {
    // Read the contents of the file
    const content = fs.readFileSync(`_posts/${file}`, 'utf-8');

    // Use gray-matter to parse the front matter
    const matterResult = grayMatter(content);

    // Extract the front matter
    const frontMatter = matterResult.data;

    // Generate a hash of the front matter
    const hash = md5(JSON.stringify(frontMatter));

    // Check if the front matter has changed
    if (hashes[file] !== hash) {
      // Update the hash for this file
      hashes[file] = hash;

      // Extract the title and date from the front matter
      const title = frontMatter.title;
      const date = frontMatter.date;

      // Get the URL for the post
      const url = `/posts/${file.slice(0, 10)}/${file.slice(11, -3)}`;

      // Store the information in an object
      const postInfo = {
        title,
        date,
        url
      };

      // Add the object to the array
      posts.push(postInfo);

      // Indicate that the file has changed
      changed = true;
    }
  });

  // Write the JSON to a file if the file has changed
  if (changed) {
    fs.writeFileSync('_data/posts.json', JSON.stringify(posts));
    // Exit the loop after the file has been written
    return;
  }

  // Start the loop again if the file has not changed
  setTimeout(updateJson, 1000);
}

// Start the loop
updateJson();
