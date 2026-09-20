/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { chapters, members } from "./App";
import mediaManifest from "./media-manifest.json";

const mediaByName = new Map(mediaManifest.map((item) => [item.fileName, item]));
const tabs = [
  { label: "Home", route: "/home" },
  { label: "Members", route: "/members" },
  { label: "Electric Car", route: "/electric-car" },
  { label: "Workshops", route: "/workshops" },
  { label: "Boat 2027", route: "/boat-2027" },
  { label: "Support", route: "/support" },
];

const futureWorkshopSignUpUrl =
  "https://forms.cloud.microsoft/r/d5RZHGV8vb";

const workshops = [
  {
    id: "sage-international-2026-09-14",
    date: "September 14, 2026",
    dateTime: "2026-09-14",
    location: "Sage International School",
    title: "Electric Vehicle Engineering Workshop",
    audience: "Grades 9–10 STEM Club",
    studentCount: 10,
    status: "completed",
    description:
      "Students explored the electric vehicle conversion process, including motors, batteries, controllers, drivetrain systems, and the engineering design and testing process.",
    photo: {
      src: "/workshop-sage-september-14.webp",
      alt: "Students attending an electric vehicle engineering workshop at Sage International School",
    },
    video: null,
    optionalNote: "Invited back for a follow-up circuits workshop",
    registrationLink: null,
  },
  {
    id: "cole-ustick-2026-09-27",
    date: "September 27, 2026",
    dateTime: "2026-09-27",
    location: "Cole & Ustick Library",
    locationArea: "Boise",
    title: "Electric Vehicle Engineering Workshop",
    audience: "Grades 7–9",
    studentCount: null,
    status: "upcoming",
    description: null,
    photo: null,
    video: null,
    optionalNote: null,
    registrationLink: null,
  },
];

const workshopStats = [
  {
    value: workshops.filter((workshop) => workshop.status === "completed")
      .length,
    label: "Workshop Completed",
  },
  {
    value: workshops.reduce(
      (total, workshop) => total + (workshop.studentCount || 0),
      0,
    ),
    label: "Students Reached",
  },
  {
    value: workshops.filter((workshop) => workshop.status === "upcoming")
      .length,
    label: "Upcoming Workshop",
  },
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
              Open members page
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
              <span>Upcoming · September 27</span>
              <h3>EV Engineering Workshop</h3>
              <p>
                Grades 7–9 at Cole &amp; Ustick Library in Boise. Limited
                seating.
              </p>
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
  const chapterMedia = chapter.files
    .map((fileName) => mediaByName.get(fileName))
    .filter(Boolean);
  const cover =
    chapterMedia.find((item) => item.type !== "video") ||
    chapterMedia.find((item) => item.poster);
  const coverUrl = cover?.type === "video" ? cover.poster : cover?.url;

  return (
    <a className="milestone-card" href={`#/electric-car/${chapter.phase}`}>
      {coverUrl && (
        <img
          className="milestone-cover"
          src={coverUrl}
          alt=""
          loading="lazy"
        />
      )}
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
        eyebrow="Current project · 2026"
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
          <div className="milestone-list">
            {chapters.map((chapter) => (
              <MilestoneCard chapter={chapter} key={chapter.phase} />
            ))}
          </div>
          <aside className="teaching-callout">
            <div>
              <h2>EV Engineering Workshops</h2>
              <p>
                After completing the EV project, The Lab Boise began using it
                to introduce other students to engineering.
              </p>
            </div>
            <a className="button button--dark" href="#/workshops">
              Explore EV Engineering Workshops →
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}

function MediaItem({ item, title }) {
  const label = `${title} — ${item.fileName}`;

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
        eyebrow={`${chapter.date} · Milestone ${chapter.phase}`}
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
        eyebrow="Planned project · Summer 2027"
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

function WorkshopCard({ workshop }) {
  const isCompleted = workshop.status === "completed";

  return (
    <article className={`workshop-entry workshop-entry--${workshop.status}`}>
      {workshop.photo && (
        <img
          className="workshop-photo"
          src={workshop.photo.src}
          alt={workshop.photo.alt}
          loading="lazy"
        />
      )}
      {workshop.video && (
        <video
          className="workshop-video"
          controls
          playsInline
          preload="metadata"
          aria-label={`${workshop.title} video`}
        >
          <source src={workshop.video.src} type={workshop.video.type} />
          Your browser does not support embedded video.
        </video>
      )}
      <div className="workshop-entry-body">
        <div className="workshop-badges">
          {isCompleted ? (
            <span className="workshop-badge workshop-badge--completed">
              ✓ Completed
            </span>
          ) : (
            <>
              <span className="workshop-badge workshop-badge--upcoming">
                Upcoming
              </span>
              <span className="workshop-badge workshop-badge--limited">
                Limited Seating
              </span>
            </>
          )}
        </div>
        <time className="workshop-date" dateTime={workshop.dateTime}>
          {workshop.date}
        </time>
        <h3>{workshop.title}</h3>
        <p className="workshop-location">
          {workshop.location}
          {workshop.locationArea ? ` · ${workshop.locationArea}` : ""}
        </p>
        <dl className="workshop-meta">
          <div>
            <dt>Audience</dt>
            <dd>{workshop.audience}</dd>
          </div>
          {workshop.studentCount !== null && (
            <div>
              <dt>Students</dt>
              <dd>{workshop.studentCount}</dd>
            </div>
          )}
        </dl>
        {workshop.description && <p>{workshop.description}</p>}
        {workshop.optionalNote && (
          <p className="workshop-note">{workshop.optionalNote}</p>
        )}
        {workshop.registrationLink && (
          <a
            className="button button--dark"
            href={workshop.registrationLink}
            target="_blank"
            rel="noreferrer"
          >
            Register
          </a>
        )}
      </div>
    </article>
  );
}

function FutureWorkshopCard() {
  return (
    <article className="workshop-entry workshop-entry--signup">
      <div className="workshop-entry-body">
        <span className="workshop-badge workshop-badge--interest">
          Advance Signup
        </span>
        <h3>Sign Up for a Future Workshop</h3>
        <p>
          Interested in attending an Electric Vehicle Engineering Workshop?
          Sign up now, even if there is not currently a workshop date that
          works for you.
        </p>
        <p>
          Additional workshops are planned through the end of 2026 and will be
          scheduled as enough students express interest. When a new workshop is
          scheduled, students who have signed up will be contacted by email
          with the opportunity to attend and confirm a spot.
        </p>
        <ul className="workshop-signup-points">
          <li>Individual students may sign up.</li>
          <li>Signing up adds you to the future workshop contact list.</li>
          <li>A seat is confirmed only after you respond to an event email.</li>
        </ul>
        <a
          className="button button--dark"
          href={futureWorkshopSignUpUrl}
          target="_blank"
          rel="noreferrer"
        >
          Sign Up to Be Invited
        </a>
        <div className="future-workshop-qr">
          <img
            src="/future-workshops-qr.png"
            alt="QR code for future electric vehicle workshop invitations"
          />
          <span>Scan to sign up for future workshop invitations</span>
        </div>
      </div>
    </article>
  );
}

function WorkshopsPage() {
  return (
    <>
      <ProjectHeader
        eyebrow="Hands-on learning"
        title="Electric Vehicle Engineering Workshops"
        description="Free, hands-on engineering workshops for students using The Lab Boise’s 2026 electric vehicle project as a real-world example."
      />
      <section className="section workshop-page">
        <div className="shell workshops-shell">
          <div className="workshop-stats" aria-label="Workshop impact">
            {workshopStats.map((stat) => (
              <div className="workshop-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="workshop-section-heading">
            <div className="kicker kicker--dark">2026 workshop series</div>
            <h2>Workshops</h2>
          </div>
          <div className="workshop-grid">
            {workshops.map((workshop) => (
              <WorkshopCard workshop={workshop} key={workshop.id} />
            ))}
            <FutureWorkshopCard />
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
        eyebrow="Members · sponsors · mentors"
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
          <p>Student-led engineering · Boise, Idaho</p>
          <p>Maintained by Vibodh Ayyapureddi</p>
        </div>
      </footer>
    </>
  );
}

export default TabbedApp;
