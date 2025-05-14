function getBasePath() {
  const pathSegments = window.location.pathname.split('/');
  const repoName = pathSegments[1];
  
  // If hosted on GitHub Pages, use repo name
  if (window.location.hostname.includes("github.io") && repoName) {
    return `/${repoName}`;
  }

  // Else, local or root deployment
  return "";
}

const base = getBasePath();

export function EventsForYou(){

    return `
    `
}