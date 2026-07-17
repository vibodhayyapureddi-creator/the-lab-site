/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { chapters, members } from "./App";
import mediaManifest from "./media-manifest.json";

const mediaByName = new Map(mediaManifest.map((item) => [item.fileName, item]));
const tabs = [
  { label: "Home", route: "/home" },
  { label: "Members", route: "/members" },
  { label: "Electric Car", route: "/electric-car" },
  { label: "Boat 2027", route: "/boat-2027" },
  { label: "Workshops", route: "/workshops" },
  { label: "Support", route: "/support" },
];

function getRoute() {
  const hash = window.location.hash;
  if (!hash || hash === "#top") return "/home";
  if (hash === "#future") return "/boat-2027";
  if (hash === "#team") return "/members";
  if (hash === "#build-log") return "/electric-car";
  if (hash === "#contact") return "/support";
  const route = hash.replace(/^#/, "");
  return route.startsWith("/") ? route : `/${route}`;
}

function useRoute() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const updateRoute = () => setRoute(getRoute());
    window.addEventListener("hashchange", updateRoute);
    return () => window.removeEventListener("hashchange", updateRoute);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [route]);

  return route;
}

function MembersList({ compact = false }) {
  return (
    <div
      className={`plain-member-list${compact ? " plain-member-list--compact" : ""}`}
    >
      {members.map((member) => (
        <div className="plain-member" key={member.name}>
          <strong>{member.name}</strong>
          <span>{member.role || "Member"}</span>
        </div>
      ))}
    </div>
  );
}

function ProjectHeader({ eyebrow, title, description }) {
  return (
    <header className="page-header">
      <div className="shell">
        <div className="kicker">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <section className="hero section">
        <div className="shell hero-layout">
          <div>
            <div className="kicker">Engineering Organization</div>
            <h1>The Lab Boise</h1>
            <p className="lead">
              The Lab Boise is a student engineering group in Boise. Projects
              are built, tested and improved through hands-on work.
            </p>
            <div className="hero-actions">
              <a className="button button--light" href="#/electric-car">
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
              See the electric car project from the first shop setup to the
              rolling chassis.
            </p>
            <span className="status">In progress</span>
          </div>
        </div>
      </section>

      <section className="section home-members">
        <div className="shell">
          <div className="section-heading section-heading--with-link">
            <div>
              <div className="kicker kicker--dark">The Lab Boise team</div>
              <h2>Members</h2>
              <p>Students and local builders working together in Boise.</p>
            </div>
            <a className="section-link" href="#/members">
              Open members page â†’
            </a>
          </div>
          <MembersList compact />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <div className="kicker kicker--dark">Projects and learning</div>
              <h2>Explore The Lab Boise</h2>
            </div>
          </div>
          <div className="home-page-grid">
            <a className="home-page-card" href="#/electric-car">
              <span>Current project</span>
              <h3>Electric Car 2026</h3>
              <p>See the electric car build in photos and videos.</p>
            </a>
            <a className="home-page-card" href="#/boat-2027">
              <span>Summer 2027</span>
              <h3>Boat project</h3>
              <p>A boat project planned for summer 2027. More details later.</p>
            </a>
            <a className="home-page-card" href="#/workshops">
              <span>Coming soon</span>
              <h3>Workshops</h3>
              <p>Hands-on workshops are coming soon.</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function MembersPage() {
  return (
    <>
      <ProjectHeader
        eyebrow="Team"
        title="Members"
        description="Members include students and working professionals who like building things."
      />
      <section className="section">
        <div className="shell">
          <MembersList />
          <div className="page-note">
            Want to help build projects? New members are welcome.
          </div>
          <a
            className="button button--dark"
            href="mailto:vibodhayyapureddi@gmail.com"
          >
            Email The Lab Boise
          </a>
        </div>
      </section>
    </>
  );
}

function MilestoneCard({ chapter }) {
  return (
    <a className="milestone-card" href={`#/electric-car/${chapter.phase}`}>
      <div>
        <span>{chapter.date}</span>
        <h3>{chapter.title}</h3>
        <p>{chapter.description}</p>
        <strong>Open milestone</strong>
      </div>
    </a>
  );
}

function ElectricCarPage() {
  return (
    <>
      <ProjectHeader
        eyebrow="Current project Â· 2026"
        title="Electric Car"
        description="A 1998 donor car is being turned into an electric car, with photos and videos showing the work."
      />
      <section className="section">
        <div className="shell">
          <div className="project-facts">
            <div className="project-fact">
              <strong>In progress</strong>
              <span>status</span>
            </div>
            <div className="project-fact">
              <strong>2026</strong>
              <span>build year</span>
            </div>
            <div className="project-fact">
              <strong>Boise</strong>
              <span>location</span>
            </div>
          </div>
          <div className="section-heading">
            <div>
              <div className="kicker kicker--dark">Chronological build log</div>
              <h2>Choose a milestone</h2>
            </div>
          </div>
          <div className="milestone-list">
            {chapters.map((chapter) => (
              <MilestoneCard chapter={chapter} key={chapter.phase} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function MediaItem({ item, title }) {
  const label = `${title} â€” ${item.fileName}`;

  return (
    <figure className="media-card">
      {item.type === "video" ? (
        <video
          controls
          playsInline
          preload="metadata"
          poster={item.poster}
          aria-label={label}
        >
          <source src={item.url} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      ) : (
        <a href={item.url} target="_blank" rel="noreferrer">
          <img src={item.url} alt={label} loading="eager" />
        </a>
      )}
      <figcaption>
        <span>
          {item.fileName.replace(/\.[^.]+$/, "")}
        </span>
        <span>{item.type === "video" ? "Video" : "Photo"}</span>
      </figcaption>
    </figure>
  );
}

function MilestonePage({ phase }) {
  const index = chapters.findIndex((chapter) => chapter.phase === phase);
  if (index < 0) return <NotFoundPage />;

  const chapter = chapters[index];
  const media = chapter.files
    .map((fileName) => mediaByName.get(fileName))
    .filter(Boolean);
  const previous = chapters[index - 1];
  const next = chapters[index + 1];

  return (
    <>
      <ProjectHeader
        eyebrow={`${chapter.date} Â· Milestone ${chapter.phase}`}
        title={chapter.title}
        description={chapter.description}
      />
      <section className="section">
        <div className="shell">
          <a className="back-link" href="#/electric-car">
            All electric car milestones
          </a>
          <div className="media-grid milestone-media">
            {media.map((item) => (
              <MediaItem item={item} title={chapter.title} key={item.fileName} />
            ))}
          </div>
          <nav
            className="chapter-pagination"
            aria-label="Build milestone navigation"
          >
            {previous ? (
              <a href={`#/electric-car/${previous.phase}`}>
                <span>Previous</span>
                <strong>{previous.title}</strong>
              </a>
            ) : (
              <span />
            )}
            {next ? (
              <a href={`#/electric-car/${next.phase}`}>
                <span>Next</span>
                <strong>{next.title}</strong>
              </a>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </section>
    </>
  );
}

function BoatPage() {
  return (
    <>
      <ProjectHeader
        eyebrow="Planned project Â· Summer 2027"
        title="Summer Boat 2027"
        description="A boat project is planned for summer 2027."
      />
      <section className="section">
        <div className="shell">
          <div className="future-detail">
            <span className="status">Planning stage</span>
            <h2>More information later</h2>
            <p>
              Project details, dates and ways to join will be posted here when
              they are ready.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function WorkshopsPage() {
  return (
    <>
      <ProjectHeader
        eyebrow="Coming soon"
        title="Workshops"
        description="Hands-on workshops are coming soon."
      />
      <section className="section">
        <div className="shell">
          <div className="future-detail">
            <span className="status">Coming soon</span>
            <h2>Topics and dates will appear here</h2>
            <p>
              Topics, dates, locations and sign-up information will be posted
              here.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function SupportPage() {
  return (
    <>
      <ProjectHeader
        eyebrow="Members Â· sponsors Â· mentors"
        title="Support The Lab Boise"
        description="You can help with tools, materials, advice, donations or sponsorships."
      />
      <section className="section">
        <div className="shell">
          <div className="contact-box">
            <h2>Get in touch</h2>
            <p>
              For membership, support or project questions, email:
            </p>
            <a href="mailto:vibodhayyapureddi@gmail.com">
              vibodhayyapureddi@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function NotFoundPage() {
  return (
    <section className="section">
      <div className="shell not-found">
        <h1>Page not found</h1>
        <p>The page you requested is not part of the current site.</p>
        <a className="button button--dark" href="#/home">
          Return home
        </a>
      </div>
    </section>
  );
}

function Page({ route }) {
  if (route === "/home") return <HomePage />;
  if (route === "/members") return <MembersPage />;
  if (route === "/electric-car") return <ElectricCarPage />;
  if (route.startsWith("/electric-car/")) {
    return <MilestonePage phase={route.split("/").pop()} />;
  }
  if (route === "/boat-2027") return <BoatPage />;
  if (route === "/workshops") return <WorkshopsPage />;
  if (route === "/support") return <SupportPage />;
  return <NotFoundPage />;
}

function TabbedApp() {
  const route = useRoute();

  useEffect(() => {
    const currentTab = tabs.find((tab) => route === tab.route);
    const milestone = chapters.find(
      (chapter) => route === `/electric-car/${chapter.phase}`,
    );
    const pageTitle = milestone?.title || currentTab?.label || "The Lab Boise";
    document.title =
      pageTitle === "Home" ? "The Lab Boise" : `${pageTitle} | The Lab Boise`;
  }, [route]);

  return (
    <>
      <a className="skip-link" href="#page-content">
        Skip to content
      </a>
      <nav className="nav" aria-label="Main navigation">
        <div className="shell nav-inner">
          <a className="brand" href="#/home" aria-label="The Lab Boise home">
            <img className="mark" src="/logo.svg" alt="" />
            <span>
              The Lab <b>Boise</b>
            </span>
          </a>
          <div className="nav-links nav-tabs">
            {tabs.map((tab) => {
              const active =
                route === tab.route ||
                (tab.route === "/electric-car" &&
                  route.startsWith("/electric-car/"));
              return (
                <a
                  className={active ? "active" : ""}
                  href={`#${tab.route}`}
                  aria-current={active ? "page" : undefined}
                  key={tab.route}
                >
                  {tab.label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
      <main id="page-content">
        <Page route={route} />
      </main>
      <footer>
        <div className="shell footer-inner">
          <a className="brand brand--footer" href="#/home">
            <img className="mark" src="/logo.svg" alt="" />
            <span>The Lab Boise</span>
          </a>
          <p>Student-led engineering Â· Boise, Idaho</p>
          <p>Maintained by Vibodh Ayyapureddi</p>
        </div>
      </footer>
    </>
  );
}

export default TabbedApp;
