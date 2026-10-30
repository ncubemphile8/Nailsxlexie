 "use client";

import { useMemo, useState, type FormEvent } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Clock3,
  Instagram, Menu, MessageCircle, Music2, Sparkles, X
} from "lucide-react";

const WORK = [
  {
    src: "/work-01.webp",
    alt: "Almond shaped nude and burgundy nail set with fine gold detailing",
    title: "Burgundy & nude",
    category: "French + detail",
    tag: "Statement"
  },
  {
    src: "/work-02.webp",
    alt: "Glossy burgundy nails with crisp white French tips",
    title: "Classic French",
    category: "French finish",
    tag: "Classic"
  }
];

const STOCK_VIDEO = "https://videos.pexels.com/video-files/7754856/7754856-hd_1920_1080_30fps.mp4";
const STOCK_POSTER = "https://images.pexels.com/photos/6135681/pexels-photo-6135681.jpeg?auto=compress&cs=tinysrgb&w=1500";
const TIKTOK_URL = "https://www.tiktok.com/@nailsxlexie";

/* Add Alex's WhatsApp number in international format without + or spaces.
   Example for Zimbabwe: 2637XXXXXXXX. Until it's set, WhatsApp opens a contact picker. */
const WHATSAPP_NUMBER = "263788378004";

function whatsappLink(message: string) {
  const phone = WHATSAPP_NUMBER.replace(/\D/g, "");
  return "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
}

const SERVICES = [
  {
    number: "01",
    name: "Acrylic sets",
    text: "Shape, length and a finish that feels completely yours.",
    note: "For your next statement set",
    symbol: "✳"
  },
  {
    number: "02",
    name: "Gel polish",
    text: "A glossy, polished look for a clean everyday finish.",
    note: "Simple, glossy, effortless",
    symbol: "◌"
  },
  {
    number: "03",
    name: "French details",
    text: "Soft neutrals, crisp tips and modern French variations.",
    note: "A timeless favourite",
    symbol: "⌁"
  },
  {
    number: "04",
    name: "Custom nail art",
    text: "Little details, colour moments and designs with personality.",
    note: "Make the look your own",
    symbol: "✧"
  }
];

const FAQS = [
  {
    q: "How do I book an appointment?",
    a: "Send an appointment request through the form or WhatsApp button. Alex will reply to confirm availability and the details."
  },
  {
    q: "Where is Nailsxlexie based?",
    a: "Nailsxlexie is based in Bulawayo, Zimbabwe. Exact location and appointment details can be shared when your booking is confirmed."
  },
  {
    q: "Can I request a design from a picture?",
    a: "Absolutely. Add a note to your request and send your inspiration photo in the WhatsApp chat so the look can be discussed before your appointment."
  },
  {
    q: "How much do services cost?",
    a: "Sets are generally around $10–$30 depending on the style, length and design. Send an inspiration photo to confirm the price before your appointment."
  }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All work");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [service, setService] = useState("Acrylic sets");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("Any time");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const gallery = useMemo(() => {
    if (activeFilter === "All work") return WORK;
    return WORK.filter((item) => item.tag === activeFilter || item.category === activeFilter);
  }, [activeFilter]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function requestService(name: string) {
    setService(name);
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
  }

  function handleBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message =
      "Hi Alex! I'd love to enquire about an appointment at Nailsxlexie.\n\n" +
      "Name: " + name + "\n" +
      "Service: " + service + "\n" +
      "Preferred date: " + (date || "Flexible") + "\n" +
      "Preferred time: " + time + "\n" +
      "Notes: " + (note || "I'd love to discuss the details.") + "\n\n" +
      "Please let me know your availability and pricing. Thank you!";
    setSubmitted(true);
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <div className="announcement">
        <span className="announcement-dot" />
        <span>Bulawayo nail appointments · By appointment only</span>
        <a href="#book">Make yours <ArrowUpRight size={13} /></a>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Nailsxlexie home" onClick={closeMenu}>
          <img src="/nailsxlexie-mark.svg" alt="Nailsxlexie" />
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "main-nav open" : "main-nav"}>
          <a href="#story" onClick={closeMenu}>The studio</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#gallery" onClick={closeMenu}>Our work</a>
          <a href="#faq" onClick={closeMenu}>Good to know</a>
          <a className="nav-book" href="#book" onClick={closeMenu}>Book an appointment <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> NAILS • BEAUTY • SELF CARE</div>
          <h1>Good nails.<br /><em>Good energy.</em><br />Always.</h1>
          <p className="hero-description">A little detail goes a long way. Come for the nails, leave with that feeling.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#book">Book your moment <ArrowRight size={16} /></a>
            <a className="text-link" href="#gallery">Explore the work <ArrowDown size={14} /></a>
          </div>
          <div className="hero-footnote">
            <span className="sparkle">✳</span>
            <span>Thoughtful sets, made with you in mind.</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-video-frame">
            <video className="hero-video" autoPlay muted loop playsInline poster={STOCK_POSTER}>
              <source src={STOCK_VIDEO} type="video/mp4" />
            </video>
            <div className="video-shade" />
            <div className="hero-image-caption">
              <span className="caption-kicker">THE NAILSXLEXIE FEELING</span>
              <span className="caption-title">Beauty in every detail.</span>
            </div>
            <div className="hero-stamp"><Sparkles size={18} /><span>YOUR<br />NAIL<br />MOMENT</span></div>
          </div>
          <div className="hero-image-card">
            <img src="/work-01.webp" alt="Nailsxlexie nail art portfolio" />
            <div className="image-card-label"><span>01 / 02</span><span>Alex's work</span></div>
          </div>
          <div className="hero-note">Made for your<br />main character<br />moment.</div>
        </div>
        <div className="hero-bottom">
          <span>01 — 04</span>
          <span className="hero-bottom-line" />
          <span>SCROLL TO DISCOVER</span>
        </div>
      </section>

      <section className="intro-strip" id="story">
        <div className="intro-side">
          <span className="section-index">01 / THE STUDIO</span>
          <span className="intro-mark">✳</span>
        </div>
        <div className="intro-main">
          <p className="eyebrow">A LITTLE ABOUT US</p>
          <h2>It’s never <em>just</em> a manicure.</h2>
          <p className="intro-text">It’s the small reset in the middle of a busy week. The finishing touch before a big day. The set that makes you look down at your hands and smile. Nailsxlexie is here for all of it.</p>
          <a className="text-link dark-link" href="#book">Come say hello <ArrowUpRight size={15} /></a>
        </div>
        <div className="intro-aside">
          <div className="quote-mark">“</div>
          <p>Confidence looks good<br />on you.</p>
          <span>NAILSXLEXIE</span>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-heading">
          <div>
            <span className="section-index">02 / THE MENU</span>
            <p className="eyebrow">YOUR NEXT FAVOURITE SET</p>
            <h2>Made to <em>match</em> you.</h2>
          </div>
          <p className="heading-aside">From understated to extra — let's find the look that feels like you.</p>
        </div>
        <div className="service-grid">
          {SERVICES.map((item) => (
            <article className="service-card" key={item.number}>
              <div className="service-top"><span>{item.number}</span><span className="service-symbol">{item.symbol}</span></div>
              <div className="service-rule" />
              <h3>{item.name}</h3>
              <p>{item.text}</p>
              <div className="service-bottom">
                <span>{item.note}</span>
                <button aria-label={"Enquire about " + item.name} onClick={() => requestService(item.name)}><ArrowUpRight size={17} /></button>
              </div>
            </article>
          ))}
        </div>
        <div className="service-disclaimer"><Sparkles size={15} /> Have a design in mind? Send an inspiration photo and ask for a personalised quote.</div>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="gallery-top">
          <div>
            <span className="section-index">03 / THE PORTFOLIO</span>
            <p className="eyebrow">A LITTLE LOOK AT THE DETAILS</p>
            <h2>Work worth <em>looking at.</em></h2>
          </div>
          <p className="gallery-copy">A growing collection of Alex’s nail work. More sets and fresh designs will be added as the portfolio grows.</p>
        </div>
        <div className="gallery-filters" role="group" aria-label="Filter portfolio">
          {["All work", "Classic", "Statement"].map((filter) => (
            <button key={filter} className={activeFilter === filter ? "filter active" : "filter"} onClick={() => setActiveFilter(filter)}>{filter}</button>
          ))}
          <span className="gallery-count">0{gallery.length} / 0{WORK.length}</span>
        </div>
        <div className="gallery-grid">
          {gallery.map((item) => {
            const originalIndex = WORK.findIndex((work) => work.src === item.src);
            return (
              <button className="gallery-item" key={item.src} onClick={() => setSelectedImage(originalIndex)} aria-label={"View " + item.title}>
                <div className="gallery-photo"><img src={item.src} alt={item.alt} /><span className="gallery-expand"><ArrowUpRight size={19} /></span></div>
                <div className="gallery-caption"><div><h3>{item.title}</h3><span>{item.category}</span></div><span className="gallery-number">0{originalIndex + 1}</span></div>
              </button>
            );
          })}
        </div>
        <div className="gallery-note"><span className="gold-dot" /> These are real Nailsxlexie portfolio photos. More looks coming soon.</div>
      </section>

      <section className="experience-section">
        <div className="experience-photo">
          <img src="/work-02.webp" alt="Burgundy and French tip manicure detail" />
          <span className="photo-vertical">THE LITTLE DETAILS MATTER</span>
        </div>
        <div className="experience-copy">
          <span className="section-index">04 / THE EXPERIENCE</span>
          <p className="eyebrow">A MOMENT THAT'S YOURS</p>
          <h2>Take a breath.<br /><em>We’ve got</em><br />the details.</h2>
          <p className="experience-text">Your time, your taste, your kind of beautiful. Tell Alex what you’re thinking and make your next set a little moment to look forward to.</p>
          <div className="experience-points">
            <div><span>01</span><p><strong>Your style, your way</strong><small>Bring an idea or let the inspiration happen.</small></p></div>
            <div><span>02</span><p><strong>Attention to detail</strong><small>Thoughtful finishing, from shape to shine.</small></p></div>
            <div><span>03</span><p><strong>A moment for you</strong><small>Make a little space in your day to reset.</small></p></div>
          </div>
          <a className="button button-light" href="#book">Let's make it happen <ArrowRight size={16} /></a>
        </div>
      </section>

      <section className="booking-section" id="book">
        <div className="booking-intro">
          <span className="section-index">05 / YOUR APPOINTMENT</span>
          <p className="eyebrow">YOUR NEXT SET STARTS HERE</p>
          <h2>Shall we make<br /><em>some time</em><br />for you?</h2>
          <p>Nailsxlexie is strictly by appointment. Share a few details and your request will open in WhatsApp, ready to send to Alex. Your appointment is only confirmed once she replies.</p>
          <div className="booking-details">
            <div><span className="detail-icon"><MessageCircle size={16} /></span><span><small>QUICK ENQUIRIES</small><strong>WhatsApp booking</strong></span></div>
            <div><span className="detail-icon"><Clock3 size={16} /></span><span><small>APPOINTMENTS</small><strong>By appointment only</strong></span></div>
          </div>
          <div className="booking-social">
            <span>FOLLOW THE NAIL JOURNEY</span>
            <a href={TIKTOK_URL} target="_blank" rel="noreferrer" aria-label="TikTok"><Music2 size={18} /></a>
          </div>
        </div>
        <div className="booking-form-wrap">
          <div className="form-heading"><span>LET'S GET YOU BOOKED</span><span className="form-sparkle">✳</span></div>
          {submitted ? (
            <div className="form-success">
              <div className="success-icon"><Check size={25} /></div>
              <h3>Your message is ready.</h3>
              <p>WhatsApp should have opened with your appointment request. Send it through and Alex will confirm availability.</p>
              <button className="text-link dark-link" onClick={() => setSubmitted(false)}>Make another request <ArrowRight size={15} /></button>
            </div>
          ) : (
            <form onSubmit={handleBooking}>
              <label>Your name<input required value={name} onChange={(e) => setName(e.target.value)} placeholder="What should Alex call you?" /></label>
              <label>What are we creating?
                <select value={service} onChange={(e) => setService(e.target.value)}>
                  {SERVICES.map((item) => <option key={item.name}>{item.name}</option>)}
                  <option>I'm not sure yet</option>
                </select>
              </label>
              <div className="form-row">
                <label>Preferred date<input type="date" min={new Date().toISOString().split("T")[0]} value={date} onChange={(e) => setDate(e.target.value)} /></label>
                <label>Preferred time
                  <select value={time} onChange={(e) => setTime(e.target.value)}>
                    <option>Any time</option><option>Morning</option><option>Afternoon</option><option>Early evening</option>
                  </select>
                </label>
              </div>
              <label>Anything else? <span className="optional">(optional)</span><textarea rows={3} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Length, shape, colours, inspiration..." /></label>
              <button className="button button-dark form-submit" type="submit">Send appointment request <ArrowRight size={16} /></button>
              <p className="form-small">Estimated set price: $10–$30 depending on design. Booking is by appointment only; Alex will confirm availability.</p>
            </form>
          )}
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="faq-title">
          <span className="section-index">06 / THE LITTLE THINGS</span>
          <p className="eyebrow">GOOD TO KNOW</p>
          <h2>A few things<br /><em>before you go.</em></h2>
        </div>
        <div className="faq-list">
          {FAQS.map((item, index) => (
            <div className={activeFaq === index ? "faq-item open" : "faq-item"} key={item.q}>
              <button onClick={() => setActiveFaq(activeFaq === index ? null : index)}>
                <span><small>0{index + 1}</small>{item.q}</span><ChevronDown size={18} />
              </button>
              {activeFaq === index && <p>{item.a}</p>}
            </div>
          ))}
        </div>
      </section>

      <section className="closing-cta">
        <div className="closing-decoration">✳</div>
        <p className="eyebrow">YOUR HANDS CALLED</p>
        <h2>They want a <em>little love.</em></h2>
        <a className="button button-light" href="#book">Let's book that set <ArrowUpRight size={16} /></a>
        <span className="closing-bottom">NAILSXLEXIE · BULAWAYO</span>
      </section>

      <footer className="footer">
        <a className="footer-brand" href="#top"><img src="/nailsxlexie-mark.svg" alt="Nailsxlexie" /></a>
        <span className="footer-tag">NAILS • BEAUTY • SELF CARE</span>
        <div className="footer-links"><a href="#services">Services</a><a href="#gallery">Portfolio</a><a href="#book">Book</a><a href={TIKTOK_URL} target="_blank" rel="noreferrer">TikTok <ArrowUpRight size={12} /></a></div>
        <span className="footer-credit">© {new Date().getFullYear()} Nailsxlexie. Made with care.</span>
      </footer>

      {selectedImage !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Portfolio image" onClick={() => setSelectedImage(null)}>
          <button className="lightbox-close" onClick={() => setSelectedImage(null)} aria-label="Close image"><X size={22} /></button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={WORK[selectedImage].src} alt={WORK[selectedImage].alt} />
            <p>{WORK[selectedImage].title} <span>— {WORK[selectedImage].category}</span></p>
          </div>
        </div>
      )}

      <a className="floating-whatsapp" href={whatsappLink("Hi Alex! I'd like to enquire about booking with Nailsxlexie.")} target="_blank" rel="noreferrer" aria-label="WhatsApp Nailsxlexie">
        <MessageCircle size={20} /><span>Let's chat</span>
      </a>
    </main>
  );
}