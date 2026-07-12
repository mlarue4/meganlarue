import headshotImg from "./assets/headshot.jpg";
import { useState, useEffect } from "react";

const CSS = `
:root{
  --ink:#22271F; --paper:#F6F4EE; --paper-2:#EDEAE0;
  --pine:#1E5A4E; --pine-deep:#143F37; --ochre:#A8792F;
  --muted:#6B7269; --hair:#D9D5C8; --maxw:1120px;
}
.mlr *{box-sizing:border-box;margin:0;padding:0}
.mlr{background:var(--paper);color:var(--ink);font-family:'Inter',system-ui,sans-serif;font-size:17px;line-height:1.6;-webkit-font-smoothing:antialiased;min-height:100vh}
.mlr .wrap{max-width:var(--maxw);margin:0 auto;padding:0 28px}
.mlr .serif{font-family:'Fraunces',Georgia,serif}
.mlr .eyebrow{font-family:'Space Mono',monospace;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:var(--pine);display:inline-block;margin-bottom:18px}
.mlr .eyebrow::before{content:"// ";color:var(--ochre)}

.mlr nav{position:sticky;top:0;z-index:50;background:rgba(246,244,238,0.82);backdrop-filter:blur(8px);border-bottom:1px solid var(--hair)}
.mlr .nav-in{display:flex;align-items:center;justify-content:space-between;height:64px}
.mlr .brand{font-family:'Fraunces',serif;font-weight:600;font-size:19px;letter-spacing:-0.01em;cursor:pointer;background:none;border:none;color:var(--ink)}
.mlr .brand span{color:var(--pine)}
.mlr .nav-links{display:flex;gap:26px;align-items:center}
.mlr .nav-links a{font-family:'Space Mono',monospace;font-size:13px;letter-spacing:0.04em;color:var(--muted);text-decoration:none;transition:color .2s;cursor:pointer}
.mlr .nav-links a:hover{color:var(--ink)}
.mlr .nav-links a.pill{color:#fff;background:var(--pine);padding:9px 16px;border-radius:999px}
.mlr .nav-links a.pill:hover{background:var(--pine-deep)}

.mlr header.hero{padding:78px 0 66px;border-bottom:1px solid var(--hair)}
.mlr .hero-grid{display:grid;grid-template-columns:1.35fr 1fr;gap:56px;align-items:center}
.mlr .hero h1{font-family:'Fraunces',serif;font-weight:500;font-size:clamp(38px,5.4vw,62px);line-height:1.02;letter-spacing:-0.02em}
.mlr .hero h1 em{font-style:italic;color:var(--pine)}
.mlr .hero .lede{margin-top:26px;max-width:33em;color:#3a4038;font-size:19px;line-height:1.55}
.mlr .foundation{margin-top:30px;padding-top:18px;border-top:1px dashed var(--hair);font-family:'Space Mono',monospace;font-size:12.5px;letter-spacing:0.06em;color:var(--muted);text-transform:uppercase}
.mlr .foundation b{color:var(--ink);font-weight:700}
.mlr .cta-row{margin-top:30px;display:flex;gap:14px;flex-wrap:wrap}
.mlr .btn{font-family:'Inter',sans-serif;font-weight:500;font-size:15px;padding:13px 22px;border-radius:999px;text-decoration:none;display:inline-flex;align-items:center;gap:8px;transition:all .2s;cursor:pointer;border:none}
.mlr .btn-primary{background:var(--pine);color:#fff}
.mlr .btn-primary:hover{background:var(--pine-deep);transform:translateY(-1px)}
.mlr .btn-ghost{background:transparent;color:var(--ink);border:1px solid var(--ink)}
.mlr .btn-ghost:hover{background:var(--ink);color:var(--paper)}

.mlr .portrait-wrap{position:relative;justify-self:center}
.mlr .portrait-block{position:absolute;inset:18px -18px -18px 18px;background:var(--pine);border-radius:8px;z-index:0}
.mlr .portrait{position:relative;z-index:1;width:100%;max-width:360px;border-radius:8px;display:block;box-shadow:0 18px 40px -18px rgba(20,63,55,0.45)}
.mlr .portrait-tag{position:absolute;z-index:2;bottom:-14px;left:-14px;background:var(--paper);border:1px solid var(--hair);font-family:'Space Mono',monospace;font-size:11.5px;letter-spacing:0.05em;color:var(--muted);padding:7px 12px;border-radius:6px;text-transform:uppercase}
.mlr .portrait-tag b{color:var(--pine)}

.mlr section{padding:82px 0;border-bottom:1px solid var(--hair)}
.mlr .section-head{max-width:44rem;margin-bottom:44px}
.mlr .section-head h2{font-family:'Fraunces',serif;font-weight:500;font-size:clamp(28px,3.6vw,40px);line-height:1.08;letter-spacing:-0.015em}
.mlr .section-head h2 em{font-style:italic;color:var(--pine)}

.mlr .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:52px;align-items:start}
.mlr .about-body p{margin-bottom:18px;color:#3a4038}
.mlr .about-body p:last-child{margin-bottom:0}
.mlr .pullquote{font-family:'Fraunces',serif;font-style:italic;font-weight:400;font-size:23px;line-height:1.4;color:var(--ink);border-left:3px solid var(--ochre);padding-left:22px}
.mlr .pullquote cite{display:block;margin-top:14px;font-style:normal;font-family:'Space Mono',monospace;font-size:12px;letter-spacing:0.06em;color:var(--muted);text-transform:uppercase}

.mlr .tenets{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--hair);border:1px solid var(--hair);border-radius:10px;overflow:hidden}
.mlr .tenet{background:var(--paper);padding:32px 30px}
.mlr .tenet .num{font-family:'Space Mono',monospace;font-size:12px;color:var(--ochre);letter-spacing:0.1em;display:block;margin-bottom:12px}
.mlr .tenet h3{font-family:'Fraunces',serif;font-weight:500;font-size:22px;line-height:1.12;letter-spacing:-0.01em;margin-bottom:12px}
.mlr .tenet p{color:#3a4038;font-size:15.5px;line-height:1.55}

.mlr .journal-grid{display:grid;grid-template-columns:1.4fr 1fr;gap:26px}
.mlr .post{background:var(--paper);border:1px solid var(--hair);border-radius:10px;padding:30px 30px 28px;text-align:left;color:var(--ink);display:flex;flex-direction:column;transition:transform .22s, box-shadow .22s, border-color .22s;cursor:pointer;font-family:inherit;width:100%}
.mlr .post:hover{transform:translateY(-3px);box-shadow:0 16px 34px -20px rgba(20,63,55,0.4);border-color:var(--pine)}
.mlr .post .meta{font-family:'Space Mono',monospace;font-size:11.5px;letter-spacing:0.06em;color:var(--muted);text-transform:uppercase;margin-bottom:16px;display:flex;gap:14px;align-items:center}
.mlr .post .meta .dot{width:5px;height:5px;border-radius:50%;background:var(--ochre);display:inline-block}
.mlr .post h3{font-family:'Fraunces',serif;font-weight:500;letter-spacing:-0.01em;line-height:1.1;margin-bottom:12px;font-size:20px}
.mlr .post p{color:#3a4038;font-size:15px;line-height:1.55;flex:1}
.mlr .post .more{margin-top:20px;font-family:'Space Mono',monospace;font-size:12px;letter-spacing:0.06em;color:var(--pine);text-transform:uppercase}
.mlr .post.feature{grid-row:span 2;justify-content:flex-end;background:linear-gradient(180deg,var(--paper) 0%,var(--paper-2) 100%)}
.mlr .post.feature h3{font-size:32px;line-height:1.05}
.mlr .post.feature p{font-size:16.5px}
.mlr .col-right{display:grid;grid-template-rows:1fr 1fr;gap:26px}

.mlr .record-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:26px}
.mlr .record{border-top:2px solid var(--ink);padding-top:20px}
.mlr .record .stat{font-family:'Fraunces',serif;font-weight:600;font-size:34px;letter-spacing:-0.02em;color:var(--pine);line-height:1;margin-bottom:10px}
.mlr .record h3{font-family:'Inter',sans-serif;font-weight:600;font-size:16px;margin-bottom:6px}
.mlr .record p{color:#3a4038;font-size:14.5px;line-height:1.5}
.mlr .record .yr{font-family:'Space Mono',monospace;font-size:11px;color:var(--muted);letter-spacing:0.06em;display:block;margin-top:8px}
.mlr .creds{margin-top:44px;padding:22px 26px;background:var(--ink);border-radius:10px;font-family:'Space Mono',monospace;font-size:12.5px;letter-spacing:0.05em;color:var(--paper);text-transform:uppercase;line-height:1.9}
.mlr .creds b{color:#E6B96A}
.mlr .creds .sep{color:var(--pine)}

.mlr .contact{text-align:center}
.mlr .contact .section-head{margin:0 auto 34px}
.mlr .contact h2{font-size:clamp(30px,4.4vw,48px)}
.mlr .contact .cta-row{justify-content:center}

.mlr footer{padding:46px 0;background:var(--paper)}
.mlr .foot-in{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px}
.mlr .foot-name{font-family:'Fraunces',serif;font-weight:600;font-size:18px}
.mlr .foot-meta{font-family:'Space Mono',monospace;font-size:11.5px;letter-spacing:0.05em;color:var(--muted);text-transform:uppercase}

.mlr .article{max-width:720px;margin:0 auto;padding:54px 28px 20px}
.mlr .back{font-family:'Space Mono',monospace;font-size:13px;letter-spacing:0.05em;color:var(--pine);text-transform:uppercase;background:none;border:none;cursor:pointer;padding:0;margin-bottom:34px;display:inline-flex;gap:8px}
.mlr .back:hover{color:var(--pine-deep)}
.mlr .a-meta{font-family:'Space Mono',monospace;font-size:12px;letter-spacing:0.06em;color:var(--muted);text-transform:uppercase;margin-bottom:16px;display:flex;gap:14px;align-items:center}
.mlr .a-meta .dot{width:5px;height:5px;border-radius:50%;background:var(--ochre);display:inline-block}
.mlr .article h1{font-family:'Fraunces',serif;font-weight:500;font-size:clamp(32px,5vw,48px);line-height:1.05;letter-spacing:-0.02em;margin-bottom:32px}
.mlr .a-body p{color:#33382f;font-size:18.5px;line-height:1.72;margin-bottom:22px}
.mlr .a-body p:first-of-type::first-letter{font-family:'Fraunces',serif;font-weight:600;float:left;font-size:64px;line-height:0.82;padding:6px 12px 0 0;color:var(--pine)}
.mlr .more-list{max-width:720px;margin:8px auto 0;padding:40px 28px 90px;border-top:1px solid var(--hair)}
.mlr .more-list .eyebrow{margin-bottom:24px}
.mlr .more-row{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.mlr .mini{background:var(--paper);border:1px solid var(--hair);border-radius:10px;padding:22px;text-align:left;cursor:pointer;font-family:inherit;transition:border-color .2s,transform .2s}
.mlr .mini:hover{border-color:var(--pine);transform:translateY(-2px)}
.mlr .mini .meta{font-family:'Space Mono',monospace;font-size:11px;letter-spacing:0.05em;color:var(--muted);text-transform:uppercase;margin-bottom:10px}
.mlr .mini h4{font-family:'Fraunces',serif;font-weight:500;font-size:18px;line-height:1.15}

.mlr .fade{animation:mlrFadeUp .5s ease both}
@keyframes mlrFadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}

@media(max-width:860px){
  .mlr .hero-grid{grid-template-columns:1fr;gap:44px}
  .mlr .portrait-wrap{order:-1;justify-self:start}
  .mlr .about-grid{grid-template-columns:1fr;gap:32px}
  .mlr .journal-grid{grid-template-columns:1fr}
  .mlr .post.feature{grid-row:auto}
  .mlr .col-right{grid-template-rows:auto}
  .mlr .tenets{grid-template-columns:1fr}
  .mlr .record-grid{grid-template-columns:1fr}
  .mlr .more-row{grid-template-columns:1fr}
  .mlr .nav-links a:not(.pill){display:none}
}
@media(prefers-reduced-motion:reduce){.mlr .fade{animation:none}}
`;

const POSTS = [
  {
    id:"meet", title:"Meet them where they are", read:"6 min read", feature:true,
    dek:"The most useful thing I ever learned as a leader: you can't install confidence in someone. You can only find the true edge of their skillset and coach them one honest step past it.",
    body:[
      "The most useful thing I've learned as a leader took me a while to accept: you cannot hand someone confidence. You can't pep-talk it into them, and you can't skip them ahead to it. It has to be built.",
      "So I stopped trying to install it. Instead I look for the real edge of a person's skillset, not where their title says they should be, not where I wish they were, but where they actually are, and I coach them one honest step past it. Then another. Confidence is just the residue of doing hard things and watching yourself succeed.",
      "I learned this partly on a basketball court. You don't develop a player by dropping them into a position they can't hold and hoping. You find what they're good at, you get them reps there, and you widen the circle out from strength. A data team is no different.",
      "In practice it means being specific. \u201cYou're great at this, and here's the next thing I want you to own.\u201d It means resisting the urge to do it for them when it would be faster. And it means being honest about the gap. People can feel a phony \u201cyou've got this,\u201d and it does the opposite of what you intended.",
      "The payoff is a team that keeps leveling up on its own, because everyone knows you see them accurately and you're bringing them forward instead of leaving them behind. That's the whole job, really."
    ]
  },
  {
    id:"oneonone", title:"The one-on-one is the whole job", read:"4 min read",
    dek:"What actually changed when I went from individual contributor to manager, and why the calendar became my most important tool.",
    body:[
      "When I moved from doing the work to leading the people who do it, the biggest change wasn't the work at all. It was the calendar.",
      "Suddenly my most important tool was the one-on-one. Not a status update. I can get status anywhere. A real conversation about what someone wants from their career, and whether the path they're on is actually taking them there.",
      "Once I know what someone's after, my job gets clear: strategize with them on how to get it, and give them the visibility and the value that makes it real to the rest of the organization. Great work that no one sees doesn't advance anybody.",
      "As an individual contributor, I measured a good week by the business value I delivered. As a manager, I measure it by whether the people around me got closer to where they're trying to go."
    ]
  },
  {
    id:"datateams", title:"Why data teams aren't software teams", read:"5 min read",
    dek:"Managing data work means starting from the business process, not the backlog. A short field guide to the difference.",
    body:[
      "People manage data teams like software teams, and then wonder why the delivery feels off. They're not the same animal.",
      "Software tends to start from features. Data starts from the business process. Before I care about a single pipeline, I want to understand what the customer is actually trying to do, which means understanding their process well enough to know what data matters and, just as importantly, what data doesn't.",
      "That reframes everything downstream. Requirements aren't a feature list; they're a translation of a business process into what the data needs to answer. And testing isn't just \u201cdoes the function run.\u201d It's system integration and business impact: does this hold up in the real workflow, for the real user, making a real decision?",
      "Manage a data team like a software team and you'll deliver things that technically work and practically miss. Start from the process, and you ship things people actually use."
    ]
  },
  {
    id:"equal", title:"Equal footing", read:"3 min read",
    dek:"The one thing I'd change about this industry: how differently people are still treated by gender and by ethnicity. Equality across the board isn't a nice-to-have.",
    body:[
      "If I could change one thing about this industry, it wouldn't be a tool or a framework. It would be how differently people still get treated, by gender and by ethnicity.",
      "I've felt it, and I've watched it happen to people I've worked with. Same idea, different reception. Same result, different credit. It's rarely loud. It's usually just quieter doors and slower benefit of the doubt.",
      "Equality across the board isn't a nice-to-have I'd tack on if there were time. To me it's the actual point of leadership: making the room fair, so the best ideas win regardless of who they came from. I try to run my corner of it that way, and I expect the people I work with to hold me to it."
    ]
  },
  {
    id:"burnout", title:"When someone's burned out", read:"4 min read",
    dek:"Sometimes the most productive thing a manager can say is: take a break, come back refreshed, and let's redirect your thinking.",
    body:[
      "Here's advice that sounds too simple to be leadership: when someone's burned out, tell them to take a break.",
      "I mean it literally. Step away, come back refreshed. Burnout usually isn't a motivation problem you can talk someone out of. It's a sign the thoughts have gotten stuck in a loop. Rest is how you redirect them.",
      "The mistake managers make is treating rest like a reward you earn after the crunch. It's not. It's a tool that produces better work, cleaner thinking, and people who are still around in a year. I'd rather someone take three days now than three months at half-speed followed by a resignation.",
      "So no heroics. Take the break. The work will be there, and you'll be better at it."
    ]
  }
];

function Nav({ go }) {
  return (
    <nav>
      <div className="wrap nav-in">
        <button className="brand" onClick={() => go("top")}>Megan LaRue</button>
        <div className="nav-links">
          <a onClick={() => go("about")}>About</a>
          <a onClick={() => go("lead")}>Leadership</a>
          <a onClick={() => go("journal")}>Journal</a>
          <a onClick={() => go("record")}>Track record</a>
          <a className="pill" onClick={() => go("contact")}>Get in touch</a>
        </div>
      </div>
    </nav>
  );
}

function Home({ go, open }) {
  const feature = POSTS.find(p => p.feature);
  const rest = POSTS.filter(p => !p.feature);
  return (
    <div className="fade">
      <header className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <h1>I used to build the systems.<br />Now I build the <em>people</em> who build them.</h1>
            <p className="lede">Data &amp; AI leader in professional services. Twelve years turning messy business problems into products people actually use, and now growing the engineers, scientists, and analysts who do the work.</p>
            <div className="foundation"><b>Lexmark</b> · 12+ yrs &nbsp;//&nbsp; Data · AI · IoT &nbsp;//&nbsp; Lexington, KY</div>
            <div className="cta-row">
              <a className="btn btn-primary" onClick={() => go("journal")}>Read the journal</a>
              <a className="btn btn-ghost" onClick={() => go("contact")}>Let's talk</a>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-block"></div>
            <img className="portrait" src={headshotImg} alt="Megan LaRue" />
            <div className="portrait-tag"><b>NOW:</b> leading data &amp; AI delivery</div>
          </div>
        </div>
      </header>

      <section id="about">
        <div className="wrap">
          <div className="about-grid">
            <div>
              <span className="eyebrow">Who I am</span>
              <h2 className="serif">Direct, warm, and genuinely <em>in your corner.</em></h2>
            </div>
            <div className="about-body">
              <p>I just made the move a lot of technical people talk about and few pull off well: from building the thing to building the team that builds the thing. Today I lead data engineers, data scientists, and analysts inside professional services, and I love it.</p>
              <p>I captained a college basketball team before I ever managed a data one. Turns out the job is the same: know your people, put them where they're strongest, give them the confidence to take the shot, and get out of the way.</p>
              <p>I stay close enough to the technical work to guide it honestly. I've written the user stories, run the migrations, shipped the platforms. But my real job now is people: their careers, their growth, and the outcomes we deliver together.</p>
              <div className="pullquote" style={{ marginTop: "26px" }}>
                "Meet people where their skillset actually is, then bring them forward."
                <cite>— how I think about coaching</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lead">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">How I lead</span>
            <h2 className="serif">Four things I believe about <em>growing people.</em></h2>
          </div>
          <div className="tenets">
            <div className="tenet"><span className="num">01</span><h3>Meet people where they are</h3><p>Confidence isn't something you hand someone. You find where their skills genuinely are, and you build them forward from there. No pretending, no leaving anyone behind.</p></div>
            <div className="tenet"><span className="num">02</span><h3>The one-on-one is the job</h3><p>The real work of managing is knowing what someone wants from their career, then giving them the strategy and visibility to actually get there.</p></div>
            <div className="tenet"><span className="num">03</span><h3>Coach the mindset, not just the skill</h3><p>Skills, people can build on their own. What I teach is how to think: how to stay proactive, how to be innovative, how to navigate the organization around them.</p></div>
            <div className="tenet"><span className="num">04</span><h3>Data teams aren't software teams</h3><p>You don't start with features. You start with the business process, what data matters, what doesn't, and you test for real-world impact, not just whether the function runs.</p></div>
          </div>
        </div>
      </section>

      <section id="journal">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">The journal</span>
            <h2 className="serif">Notes on leadership, data, and <em>the work.</em></h2>
          </div>
          <div className="journal-grid">
            <button className="post feature" onClick={() => open(feature.id)}>
              <div className="meta"><span>Essay</span><span className="dot"></span><span>{feature.read}</span></div>
              <h3>{feature.title}</h3>
              <p>{feature.dek}</p>
              <span className="more">Read the essay →</span>
            </button>
            <div className="col-right">
              {rest.slice(0, 2).map(p => (
                <button key={p.id} className="post" onClick={() => open(p.id)}>
                  <div className="meta"><span>Essay</span><span className="dot"></span><span>{p.read}</span></div>
                  <h3>{p.title}</h3>
                  <p>{p.dek}</p>
                  <span className="more">Read →</span>
                </button>
              ))}
            </div>
          </div>
          <div className="journal-grid" style={{ marginTop: "26px", gridTemplateColumns: "1fr 1fr" }}>
            {rest.slice(2).map(p => (
              <button key={p.id} className="post" onClick={() => open(p.id)}>
                <div className="meta"><span>Essay</span><span className="dot"></span><span>{p.read}</span></div>
                <h3>{p.title}</h3>
                <p>{p.dek}</p>
                <span className="more">Read →</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="record">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">The foundation</span>
            <h2 className="serif">Twelve years, one company, <em>delivering value along the way.</em></h2>
          </div>
          <div className="record-grid">
            <div className="record"><div className="stat">~$1M</div><h3>Saved in an analytics migration</h3><p>Led the move from Oracle Siebel to Azure and Power BI, improving scalability and usability while cutting cost.</p><span className="yr">Lead Analytics Business Analyst · 2016–2018</span></div>
            <div className="record"><div className="stat">D365</div><h3>Enterprise platform delivery</h3><p>Designed and delivered solutions on Dynamics 365 and Azure, with SAP integrations across service, order management, field service, and sales.</p><span className="yr">Lead Business Analyst · 2018–2021</span></div>
            <div className="record"><div className="stat serif" style={{ fontSize: "26px" }}>Voice of the customer</div><h3>Product vision &amp; roadmap</h3><p>Owned the customer-facing roadmap for enterprise service, IoT, and analytics, turning customer discovery into a backlog teams could build.</p><span className="yr">Senior role · 2022–present</span></div>
            <div className="record"><div className="stat serif" style={{ fontSize: "26px" }}>From scratch</div><h3>Built the delivery process</h3><p>Implemented Jira and the practice around it: accurate user stories, a real backlog, and coordination that holds up across concurrent projects.</p><span className="yr">Across roles</span></div>
          </div>
          <div className="creds">
            <b>M.S. Computer Science</b> — Kentucky State <span className="sep">//</span> <b>SAFe 6</b> Product Owner / Product Manager <span className="sep">//</span> <b>NC State AI Academy</b> — Data Scientist &amp; AI Associate
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Say hello</span>
            <h2 className="serif">Building something, hiring, or just want to <em>talk shop?</em></h2>
          </div>
          <div className="cta-row">
            <a className="btn btn-primary" href="https://www.linkedin.com/in/meganlarue-04745651" target="_blank" rel="noopener">Connect on LinkedIn</a>
            <a className="btn btn-ghost" href="mailto:meganlarue79@gmail.com">Send an email</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap foot-in">
          <div className="foot-name">Megan LaRue</div>
          <div className="foot-meta">Lexington, KY &nbsp;·&nbsp; Data &amp; AI Leadership</div>
        </div>
      </footer>
    </div>
  );
}

function Article({ post, back, open }) {
  const others = POSTS.filter(p => p.id !== post.id).slice(0, 2);
  return (
    <div className="fade">
      <div className="article">
        <button className="back" onClick={back}>← Back to journal</button>
        <div className="a-meta"><span>Essay</span><span className="dot"></span><span>{post.read}</span></div>
        <h1 className="serif">{post.title}</h1>
        <div className="a-body">
          {post.body.map((para, i) => <p key={i}>{para}</p>)}
        </div>
      </div>
      <div className="more-list">
        <span className="eyebrow">Keep reading</span>
        <div className="more-row">
          {others.map(p => (
            <button key={p.id} className="mini" onClick={() => open(p.id)}>
              <div className="meta">{p.read}</div>
              <h4 className="serif">{p.title}</h4>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState("home");
  const [pending, setPending] = useState(null);

  // load fonts once
  useEffect(() => {
    const id = "mlr-fonts";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Inter:wght@400;500;600&family=Space+Mono:wght@400;700&display=swap";
      document.head.appendChild(link);
    }
  }, []);

  const open = (id) => { setView(id); window.scrollTo({ top: 0 }); };
  const back = () => { setView("home"); setPending("journal"); };
  const go = (section) => {
    if (view !== "home") { setView("home"); setPending(section); }
    else { scrollTo(section); }
  };
  const scrollTo = (section) => {
    if (section === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (view === "home" && pending) {
      requestAnimationFrame(() => { scrollTo(pending); setPending(null); });
    }
  }, [view, pending]);

  const post = POSTS.find(p => p.id === view);

  return (
    <div className="mlr">
      <style>{CSS}</style>
      <Nav go={go} />
      {view === "home"
        ? <Home go={go} open={open} />
        : <Article post={post} back={back} open={open} />}
    </div>
  );
}
