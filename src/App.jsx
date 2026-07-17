/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import mediaManifest from "./media-manifest.json";

const members = [
  { name: "Vibodh Ayyapureddi", role: "Founder and Lead" },
  { name: "Kallen Raeder" },
  { name: "Blake Franks" },
  { name: "David Foster" },
  { name: "Isaac Levesque" },
  { name: "Jaden Das" },
  { name: "Parker Ingram" },
  { name: "Deniz Egemen" },
];

const navItems = [
  ["Home", "#top"],
  ["Members", "#team"],
  ["Electric Car", "#build-log"],
  ["Future", "#future"],
  ["Support", "#contact"],
];

const chapters = [
  {
    date: "May 2, 2026",
    phase: "01",
    title: "Setting up the 3D printer",
    description:
      "The 3D printer was set up and checked for making prototype parts.",
    files: ["IMG_0842.JPG", "IMG_0844.JPG"],
  },
  {
    date: "June 13, 2026",
    phase: "02",
    title: "Chassis collection",
    description:
      "The 1998 donor chassis was picked up and brought into the shop.",
    files: ["IMG_1726.JPG", "IMG_1727.MOV", "IMG_1728.JPG", "IMG_1069.HEIC"],
  },
  {
    date: "June 15–20, 2026",
    phase: "03",
    title: "Surveying the platform",
    description:
      "The chassis, suspension, differential and space for new parts were measured.",
    files: [
      "IMG_1072.HEIC",
      "IMG_1080.HEIC",
      "IMG_1081.HEIC",
      "IMG_1079.HEIC",
    ],
  },
  {
    date: "June 26–28, 2026",
    phase: "04",
    title: "Adapter design and prototypes",
    description:
      "The adapter was made in CAD and test pieces were printed to check the fit.",
    files: [
      "IMG_1091.HEIC",
      "IMG_1092.HEIC",
      "IMG_1095.MOV",
      "IMG_1098.HEIC",
      "IMG_1099.MOV",
    ],
  },
  {
    date: "June 29, 2026",
    phase: "05",
    title: "Cleaning and preparation",
    description:
      "The chassis and parts were cleaned before the main fabrication work started.",
    files: ["IMG_2182 - Trim.mp4", "IMG_2184.JPG", "IMG_2186.JPG", "IMG_2189.JPG"],
  },
  {
    date: "July 1–2, 2026",
    phase: "06",
    title: "Battery mount and frame fabrication",
    description:
      "The battery mount and the frame pieces connecting it to the chassis were built.",
    files: [
      "IMG_2204.JPG",
      "IMG_2205.JPG",
      "IMG_2207.JPG",
      "IMG_2212.MOV",
      "IMG_1106 - Trim.mp4",
      "IMG_1110.HEIC",
      "IMG_1111.MOV",
      "IMG_1120.HEIC",
    ],
  },
  {
    date: "July 4, 2026",
    phase: "08",
    title: "Battery mount assembly",
    description:
      "The battery mount was put together and checked for position and clearance.",
    files: ["IMG_1118.HEIC", "IMG_1122.HEIC"],
  },
  {
    date: "July 5, 2026",
    phase: "09",
    title: "Attaching the motor mount parts",
    description:
      "The adapter and motor mount parts were attached and checked for fit and bolt access. More work came later.",
    files: [
      "IMG_2298.JPG",
      "IMG_2300.JPG",
      "IMG_2304 - Trim.mp4",
      "IMG_2306.JPG",
      "IMG_2309.JPG",
      "IMG_2310.MOV",
      "IMG_1135.HEIC",
      "IMG_1139.MOV",
      "IMG_1142.HEIC",
      "IMG_1146.HEIC",
      "IMG_1149.HEIC",
    ],
  },
  {
    date: "July 6, 2026",
    phase: "10",
    title: "Motor mount fabrication",
    description:
      "The motor mount pieces were cut, drilled and welded.",
    files: [
      "IMG_2347.JPG",
      "IMG_2350.JPG",
      "IMG_2354.JPG",
      "IMG_2358.JPG",
      "IMG_2359.MOV",
      "IMG_2364 - Trim.mp4",
      "IMG_2367.JPG",
    ],
  },
  {
    date: "July 7–11, 2026",
    phase: "11",
    title: "Motor mount brackets and steering alignment",
    description:
      "The motor mount brackets were drilled, the motor was attached to the chassis and the steering was lined up.",
    files: [
      "IMG_1154.HEIC",
      "IMG_1155.MOV",
      "IMG_1160.HEIC",
      "IMG_1163.HEIC",
    ],
  },
  {
    date: "July 12, 2026",
    phase: "13",
    title: "Controls, seating and assembly",
    description:
      "The seats were mounted, controls were added and the steering was worked on.",
    files: [
      "IMG_1174.HEIC",
      "IMG_1175.HEIC",
      "IMG_1177.MOV",
      "IMG_1179.HEIC",
      "IMG_1181.HEIC",
      "IMG_1182.MOV",
      "IMG_1184.HEIC",
      "IMG_1197.HEIC",
    ],
  },
  {
    date: "July 13, 2026",
    phase: "14",
    title: "Floor panel and steering support",
    description:
      "The floor panel and steering support were added to check the driving position.",
    files: [
      "IMG_1199.MOV",
      "IMG_1204.HEIC",
      "IMG_1208.HEIC",
      "IMG_1209.HEIC",
      "IMG_1213.HEIC",
    ],
  },
  {
    date: "July 15, 2026",
    phase: "15",
    title: "Rolling chassis milestone",
    description:
      "The car was on its wheels with the seat, steering and main frame pieces in place.",
    files: ["IMG_1215.HEIC", "IMG_2043.HEIC"],
  },
];

const mediaByName = new Map(mediaManifest.map((item) => [item.fileName, item]));
function MediaCard({ item, title }) {
  const label = `${title} — ${item.fileName}`;

  return (
    <figure className={`media-card media-card--${item.type}`}>
      {item.type === "video" ? (
        <video
          controls
          playsInline
          preload="none"
          poster={item.poster}
          aria-label={label}
        >
          <source src={item.url} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      ) : (
        <a href={item.url} target="_blank" rel="noreferrer">
          <img src={item.url} alt={label} loading="lazy" />
        </a>
      )}
      <figcaption>
        <span>{item.fileName.replace(/\.[^.]+$/, "")}</span>
        <span>{item.type === "video" ? "Video" : "Photo"}</span>
      </figcaption>
    </figure>
  );
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <nav className="nav" aria-label="Main navigation">
        <div className="shell nav-inner">
          <a className="brand" href="#top" aria-label="The Lab Boise home">
            <img className="mark" src="/logo.svg" alt="" />
            <span>
              The Lab <b>Boise</b>
            </span>
          </a>
          <div className="nav-links">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
          <a className="nav-cta" href="mailto:vibodhayyapureddi@gmail.com">
            Get involved
          </a>
        </div>
      </nav>

      <main id="main">
        <section id="top" className="hero section">
          <div className="shell hero-layout">
            <div>
              <div className="kicker">Engineering Organization</div>
              <h1>The Lab Boise</h1>
              <p className="lead">
                The Lab Boise is a student-led engineering organization in
                Boise, Idaho focused on building real projects, prototyping and
                solving technical problems.
              </p>
              <div className="hero-actions">
                <a className="button button--light" href="#build-log">
                  View Electric Car 2026
                </a>
              </div>
              <div className="hero-rail">
                <span>
                  <strong>Main project:</strong> Electric Car 2026
                </span>
                <span>
                  <strong>Location:</strong> Boise, Idaho
                </span>
              </div>
            </div>
            <div className="panel">
              <div className="panel-title">Electric Car 2026</div>
              <p>
                Follow the electric car project from the first shop setup
                through the rolling chassis milestone.
              </p>
              <span className="status">In progress</span>
            </div>
          </div>
        </section>

        <section className="intro section">
          <div className="shell intro-grid">
            <div className="info-block">
              <h2>About</h2>
              <p>
                The Lab Boise brings student engineering work into one
                organized place. The focus is practical design, prototyping,
                testing and turning ideas into working systems.
              </p>
            </div>
            <div className="info-block">
              <h2>What Gets Worked On</h2>
              <ul>
                <li>Mechanical design</li>
                <li>Electrical systems</li>
                <li>Software and controls</li>
                <li>Testing and fabrication</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="build-log" className="section build-log">
          <div className="shell">
            <div className="section-heading">
              <div>
                <div className="kicker kicker--dark">Build log · 2026</div>
                <h2>From empty frame to rolling platform.</h2>
              </div>
              <p>
                Fifteen milestones, presented in chronological order. Select
                any photo for a full-size view; videos play in place.
              </p>
            </div>

            <div className="timeline">
              {chapters.map((chapter) => {
                const media = chapter.files
                  .map((fileName) => mediaByName.get(fileName))
                  .filter(Boolean);

                return (
                  <article className="chapter" key={chapter.phase}>
                    <div className="chapter-marker" aria-hidden="true">
                      {chapter.phase}
                    </div>
                    <div className="chapter-header">
                      <time>{chapter.date}</time>
                      <h3>{chapter.title}</h3>
                      <p>{chapter.description}</p>
                    </div>
                    <div className="media-grid">
                      {media.map((item) => (
                        <MediaCard
                          item={item}
                          title={chapter.title}
                          key={item.fileName}
                        />
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="future" className="section future">
          <div className="shell">
            <div className="section-heading">
              <div>
                <div className="kicker kicker--dark">On the horizon</div>
                <h2>More projects, more ways to learn.</h2>
              </div>
              <p>
                The electric car remains the primary build. These are the next
                ideas taking shape around it.
              </p>
            </div>

            <div className="future-grid">
              <article className="future-card future-card--boat">
                <span className="future-year">Summer 2027</span>
                <div>
                  <h3>Summer Boat 2027</h3>
                  <p>
                    A new hands-on boat project is planned for summer 2027.
                    Scope, design goals and participation details will be
                    announced as the plan develops.
                  </p>
                </div>
                <span className="coming-soon">More information later</span>
              </article>
              <article className="future-card future-card--workshops">
                <span className="future-year">Coming soon</span>
                <div>
                  <h3>Upcoming workshops</h3>
                  <p>
                    The Lab Boise will soon teach practical workshops tied to
                    building, engineering and project skills. Topics, dates and
                    registration information will be available soon.
                  </p>
                </div>
                <span className="coming-soon">
                  Schedule and details coming soon
                </span>
              </article>
            </div>
          </div>
        </section>

        <section id="team" className="section team">
          <div className="shell team-grid">
            <div>
              <div className="kicker kicker--dark">The people behind the work</div>
              <h2>Built by a growing Boise team.</h2>
              <p>
                The Lab Boise welcomes high school and college students,
                working professionals and curious builders at every experience
                level.
              </p>
              <a
                className="button button--dark"
                href="mailto:vibodhayyapureddi@gmail.com"
              >
                Join or support the lab
              </a>
            </div>
            <div className="member-list">
              {members.map((member, index) => (
                <div key={member.name}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{member.name}</strong>
                  <small>{member.role || "Member"}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="shell contact-inner">
            <div>
              <div className="kicker">Members · sponsors · mentors</div>
              <h2>Help us build what comes next.</h2>
            </div>
            <div>
              <p>
                Materials, tools, technical advice, sponsorship and people who
                want to learn by making are welcome.
              </p>
              <a href="mailto:vibodhayyapureddi@gmail.com">
                vibodhayyapureddi@gmail.com <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-inner">
          <a className="brand brand--footer" href="#top">
            <img className="mark" src="/logo.svg" alt="" />
            <span>The Lab Boise</span>
          </a>
          <p>Student-led engineering · Boise, Idaho</p>
          <p>Maintained by Vibodh Ayyapureddi</p>
        </div>
      </footer>
    </>
  );
}

export { chapters, members };
export default App;
