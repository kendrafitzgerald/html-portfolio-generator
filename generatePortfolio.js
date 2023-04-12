function generatePortfolio(data) {
  return  `<!DOCTYPE html>
<html>
<head>
<title>W3.CSS Template</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
</head>
<body>
<section class="hero is-primary">
  <div class="hero-body">
    <p class="title">
      ${data.name}
    </p>
    <p class="subtitle">
      ${data.location}
    </p>
  </div>
</section>
<section class="section is-medium has-background-primary">
  <h1 class="title">Bio</h1>
  <h2 class="subtitle">
    ${data.bio}
  </h2>
</section>
<section class="section">
  <h1 class="title">Contacts</h1>
  <h2 class="subtitle">
  <a href="${data.LinkedIn}">Here is a Link to My LinkedIn</a>

   <a href="${data.GitHub}}"> Here is a Link to My GitHub</a>
  </h2>
</section>

</body>
</html>`}

module.exports = generatePortfolio