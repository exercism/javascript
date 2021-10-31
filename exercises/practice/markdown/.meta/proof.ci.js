export const parse = (markdown) => {
  if (markdown.includes(' __')) {
    markdown = markdown.replace(' __', ' <strong>');
  }
  if (markdown.includes(' _')) {
    markdown = markdown.replace(' _', ' <em>');
  }

  if (markdown.includes('__ ')) {
    markdown = markdown.replace('__ ', '</strong> ');
  }
  if (markdown.includes('_ ')) {
    markdown = markdown.replace('_ ', '</em> ');
  }

  if (markdown.startsWith('__')) {
    markdown = markdown.replace('__', '<strong>');
  }
  if (markdown.endsWith('__')) {
    markdown = markdown.replace('__', '</strong>');
  }

  if (markdown.startsWith('_')) {
    markdown = markdown.replace('_', '<em>');
  }
  if (markdown.endsWith('_')) {
    markdown = markdown.replace('_', '</em>');
  }

  if (markdown.startsWith('# ')) {
    markdown = markdown.replace('# ', '<h1>');
    if (markdown.match(/\n\*/gm)) {
      markdown = markdown.replace('\n* ', '</h1><ul><li>');
      markdown = markdown.replaceAll('\n* ', '</li><li>');
      markdown = markdown.replace('\n', '</li></ul><p>');
      markdown = markdown + '</p>';
    } else {
      markdown = markdown + '</h1>';
    }
  } else if (markdown.startsWith('## ')) {
    markdown = markdown.replace('## ', '<h2>') + '</h2>';
  } else if (markdown.startsWith('### ')) {
    markdown = markdown.replace('### ', '<h3>') + '</h3>';
  } else if (markdown.startsWith('#### ')) {
    markdown = markdown.replace('#### ', '<h4>') + '</h4>';
  } else if (markdown.startsWith('##### ')) {
    markdown = markdown.replace('##### ', '<h5>') + '</h5>';
  } else if (markdown.startsWith('###### ')) {
    markdown = markdown.replace('###### ', '<h6>') + '</h6>';
  } else if (markdown.startsWith('* ')) {
    markdown = markdown.replace('* ', '<ul><li>');
    markdown = markdown.replaceAll('\n* ', '</li><li>');
    markdown = markdown + '</li></ul>';
  } else {
    markdown = `<p>${markdown}</p>`;
  }

  markdown = markdown.replace('\n* ', '<ul><li>');
  markdown = markdown.replaceAll('\n* ', '</li><li>');
  markdown = markdown.replace('\n', '<ul><li>');

  return markdown;
};
