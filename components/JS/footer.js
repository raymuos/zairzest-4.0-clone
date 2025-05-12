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

export function Footer(){

    return `    
        <footer>
            
        <div class="top-footer">
            <h2 >Want to know <br>about us ?</h2>
        </div>
        <div class="mid-footer">
            <p class="footer-text-1">
                Come and know more about Zairza and join our community to experience even more amazing things.
            </p>
            <div id="links-div" style="margin-bottom: 20px;">
                
                <a class="links" href="#"><div class="circle-div"><i class="fa-brands fa-facebook-f"></i></div></a>
                <a class="links" href="#"><div class="circle-div"><i class="fa-brands fa-x-twitter"></i></div></a>
                <a class="links" href="#"><div class="circle-div"><i class="fa-brands fa-youtube"></i></div></a>
                <a class="links" href="#"><div class="circle-div"><i class="fa-solid fa-envelope"></i></div></a>
                <a class="links" href="#"><div class="circle-div"><i class="fa-brands fa-instagram"></i></div></a>
                <a class="links" href="#"><div class="circle-div"><i class="fa-brands fa-github"></i></div></a>
            
            </div>
        </div>
        
        <div class="bottom-footer">
            <p style="font-size: 0.8rem;">
                OUTR (CET Campus), Kalinga Nagar, Ghatikia, Bhubaneswar, Odisha.<br />
                +91 7205883336
            </p>
            <div>
                <p style="display: flex; align-items: center; gap: 10px">
                    Presented by <img src="../Public/images/zairza-logo.webp" alt="Zairza Logo" width="40px" />
                </p>
            </div>
        </div>
            
    </footer>

`
}