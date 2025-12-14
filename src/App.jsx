import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
// To replace images: 
// 1. Put your portrait photo in src/assets/ and name it (e.g., 'portrait.jpg' or 'my-photo.png')
// 2. Put project images in src/assets/ and name them (e.g., 'project1.jpg')
// 3. Update the import paths below to match your filenames
import heroPortrait from './assets/mainpicture.png'
import newspaperBackground from './assets/grunge_old_newspaper_limited.jpg'
import phishnetImage from './assets/phishnet.png'
import mindtapImage from './assets/MindTap.png'
import simonCoxImage from './assets/SimonCox.png'
import murcImage from './assets/MURC.jpg'
import stromaImage from './assets/Stroma.JPG'
import acsPosterImage from './assets/ACSPoster.jpg'
import acsTalkImage from './assets/ACSTalk.JPG'
import geneImage from './assets/Gene.png'
import forumAtlasImage from './assets/project-forum.svg'
import marbleArchiveImage from './assets/project-marble.svg'
import echoBasilicaImage from './assets/project-echo.svg'
import './App.css'

const Typewriter = ({ texts, typingSpeed = 50, deletingSpeed = 30, pauseTime = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        if (isDeleting) {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        } else {
          setIsDeleting(true)
        }
      }, pauseTime)
      return () => clearTimeout(pauseTimer)
    }

    const currentFullText = texts[currentTextIndex]
    const speed = isDeleting ? deletingSpeed : typingSpeed

    const timer = setTimeout(() => {
      if (isDeleting) {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1))
        } else {
          setIsPaused(true)
        }
      } else {
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1))
        } else {
          setIsPaused(true)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span>
      {currentText}
      <span className="typewriter-cursor">|</span>
    </span>
  )
}

const projects = [
  {
    title: 'PhishNet.AI',
    description:
      'A machine learning web application designed to detect and classify phishing attempts in real-time, with an interactive learning mode to help users improve their security awareness.',
    detailedDescription:
      'PhishNet.AI is an intelligent phishing detection system that analyzes email, Google Chat, Slack, or other text content to identify malicious patterns. The application features real-time phishing prediction using a pre-trained SVC model and TF-IDF vectorizer, providing users with immediate feedback through a modern web interface. Beyond detection, it includes an interactive learning mode where users can practice identifying phishing emails and receive feedback comparing their guesses to the model\'s predictions. The system uses a robust Flask-RESTX backend with Swagger UI documentation, automated email preprocessing, and handles class imbalance using RandomUnderSampler.',
    toolsets: [
      { label: 'Backend', items: ['Python', 'Flask', 'Flask-RESTX', 'Scikit-learn', 'NLTK'] },
      { label: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript'] },
      { label: 'ML', items: ['SVC Model', 'TF-IDF Vectorizer', 'Pandas', 'Joblib'] },
    ],
    image: phishnetImage,
    images: [{ src: phishnetImage, caption: null }],
    imageAlt: 'PhishNet.AI phishing detection interface',
    githubLink: 'https://github.com/danishhakimtelus/PhishNet.AI',
    demoLink: 'https://www.youtube.com/watch?v=rXw9ejR7Rac',
    year: '2025',
  },
  {
    title: 'MindTap',
    description:
      'An EEG-based assistive headset enabling neural control of iOS switch-accessibility features for users with motor impairments.',
    detailedDescription:
      'MindTap is an innovative assistive technology project that uses EEG (electroencephalography) brainwave signals to enable neural control of iOS devices. The system processes raw EEG data through MATLAB signal processing scripts to clean, preprocess, and convert brainwave patterns into binary control triggers. This allows users with motor impairments to interact with iOS switch-accessibility features using only their brain signals. The project involved hardware design using SolidWorks, signal processing algorithm development, and integration with iOS accessibility frameworks. MindTap was selected as a finalist in the 2024 Simon Cox Design Competition, recognizing its innovation in accessibility and neurotechnology.',
    toolsets: [
      { label: 'Signal Processing', items: ['MATLAB', 'EEG Analysis', 'Data Preprocessing'] },
      { label: 'Hardware', items: ['SolidWorks', 'EEG Sensors', 'Arduino'] },
      { label: 'Integration', items: ['iOS Accessibility', 'Bluetooth', 'OpenBCI'] },
    ],
    image: mindtapImage,
    images: [
      { src: mindtapImage, caption: null },
      { src: simonCoxImage, caption: 'Simon Cox Finals 2024' },
      { src: murcImage, caption: 'MURC Research Conference - Presented neuro research on EEGs and electrode placement' },
    ],
    imageAlt: 'MindTap EEG-based assistive headset for iOS control',
    githubLink: 'https://github.com/danishhakim1/MINT',
    demoLink: 'https://www.youtube.com/watch?v=thVtysaQnYg',
    year: '2024',
  },
  {
    title: 'Artificial Cornea Project',
    description:
      'A low-cost artificial corneal stroma prototype using sustainable biomaterials, developed in collaboration with an ophthalmologist at Vancouver General Hospital.',
    detailedDescription:
      'Led the development of an innovative artificial corneal stroma prototype designed to provide a low-cost solution for corneal transplantation. The project involved close collaboration with an ophthalmologist at Vancouver General Hospital to ensure clinical relevance. Used Python, R, and Excel for comprehensive data analysis of tensile strength and optical transmission properties. Achieved significant improvements: 35% higher tensile strength and 1.1% improved optical clarity compared to baseline samples. The research was presented at the ACS Spring 2025 Conference with over 13,000 attendees and was selected for the competitive Sci-Mix session, recognizing outstanding abstracts in the field.',
    toolsets: [
      { label: 'Data Analysis', items: ['Python', 'R', 'Excel'] },
      { label: 'Research', items: ['Biomaterials', 'Biomechanics', 'Optical Analysis'] },
      { label: 'Collaboration', items: ['VGH Ophthalmology', 'UBC BioProducts Institute'] },
    ],
    image: stromaImage,
    images: [
      { src: stromaImage, caption: null },
      { src: acsPosterImage, caption: 'ACS Spring 2025 Conference - Poster presentation in San Diego' },
      { src: acsTalkImage, caption: 'Presentation to 200+ engineers and researchers at ACS Spring 2025 Conference' },
    ],
    imageAlt: 'Artificial corneal stroma prototype',
    githubLink: null,
    demoLink: null,
    year: '2025',
  },
  {
    title: 'Integrative Genomic and Clinical Analysis',
    description:
      'Bioinformatics analysis of TCGA-LUSC data integrating clinical, mutation, and RNA-Seq datasets to identify biologically significant patient clusters and functional pathways.',
    detailedDescription:
      'Conducted comprehensive integrative genomic analysis of TCGA-LUSC (Lung Squamous Cell Carcinoma) data using R and RStudio. Leveraged R to preprocess, clean, and integrate clinical, mutation, and RNA-Seq datasets, identifying biologically significant mutation-based patient clusters. Performed differential expression (DE) analysis using DESeq2 to identify transcriptomic changes associated with different mutation clusters. Conducted KEGG pathway enrichment analysis to link mutation clusters to functional networks and biological pathways, providing insights into the molecular mechanisms underlying lung squamous cell carcinoma. The analysis integrated multiple data types to provide a holistic view of the genomic landscape and its clinical implications.',
    toolsets: [
      { label: 'Analysis', items: ['R', 'RStudio', 'DESeq2', 'KEGG Pathway Analysis'] },
      { label: 'Data', items: ['TCGA-LUSC', 'RNA-Seq', 'Mutation Data', 'Clinical Data'] },
      { label: 'Skills', items: ['Bioinformatics', 'Statistical Data Analysis', 'Computational Biology'] },
    ],
    image: geneImage,
    images: [{ 
      src: geneImage, 
      caption: null 
    }],
    imageAlt: 'Genomic data visualization and bioinformatics analysis',
    githubLink: null,
    demoLink: '/LUSC Data Analysis (2).pdf',
    year: '2024',
  },
]

const highlights = [
  { label: 'Years crafting web', value: '4+' },
  { label: 'Interfaces unearthed', value: '18' },
  { label: 'Currently', value: 'Freelance Frontend Lead' },
]

const experienceTimeline = [
  {
    period: 'Dec 2025 — Present',
    title: 'Software Engineering Intern · Telus Health',
    summary:
      'Developing AI solutions for home health monitoring.',
  },
  {
    period: 'May 2025 — Dec 2025',
    title: 'AI and Data Engineering Intern· TELUS AI Accelerator',
    summary:
      'Developing MBRL pipelines and data integrations on GCP to optimize energy use, projected to save $450K and cut usage by 20%.',
  },
  {
    period: ' Sept 2024 — April 2025',
    title: 'FP&A Analyst · Fennec.AI',
    summary:
      'Built financial and revenue models for investor decks, helping secure a $300K pre-seed raise at a $10M valuation.',
  },
  {
    period: ' May 2024 — April 2025',
    title: 'Material Analysis & Bioengineering Research Intern · UBC BioProducts Institute',
    summary:
      'Engineered a sustainable artificial corneal stroma with 35% higher tensile strength and 1.1% improved optical clarity.',
  },
  {
    period: 'Sept 2023 — June 2024',
    title: 'Co-Lead, MindTap Project · UBC MINT',
    summary:
      'Led development of an EEG-based assistive headset enabling neural control of iOS devices, finalist at the 2024 Simon Cox Competition.',
  },
]

const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#awards', label: 'Awards' },
  { href: '#contact', label: 'Contact' },
]

const awards = [
  {
    year: '2026',
    title: 'UBC Presidential Scholars Award',
    detail: 'CAD 3,000/yr',
  },
  {
    year: '2025',
    title: 'UBC Presidential Scholars Award',
    detail: 'CAD 3,000/yr',
  },
  {
    year: '2024',
    title: 'UBC Faculty of Medicine Multidisciplinary Research Award',
    detail: 'CAD 11,500',
  },
  {
    year: '2024',
    title: 'UBC Presidential Scholars Award',
    detail: 'CAD 3,000/yr',
  },
  {
    year: '2023',
    title: 'UBC Presidential Scholars Award',
    detail: 'CAD 3,000/yr',
  },
  {
    year: '2022',
    title: 'UBC International Major Entrance Scholarship',
    detail: 'CAD 80,000',
  },
  {
    year: '2022',
    title: 'UOFT Major Entrance Scholarship',
    detail: 'CAD 100,000',
  },
  {
    year: '2022',
    title: 'McGill Major Entrance Scholarship',
    detail: 'CAD 12,000',
  },
  {
    year: '2022',
    title: 'UBC Special Entrance Scholarship',
    detail: 'CAD 3,000',
  },
]

const Section = ({ id, eyebrow, title, children }) => (
  <section id={id} className="section">
    <motion.div
      className="section-inner"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {children}
    </motion.div>
  </section>
)

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (!isOpen) return
    
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (project) {
      setCurrentImageIndex(0)
    }
  }, [project])

  useEffect(() => {
    if (project?.images && project.images.length > 0) {
      if (currentImageIndex >= project.images.length) {
        setCurrentImageIndex(0)
      }
    }
  }, [project, currentImageIndex])

  if (!isOpen || !project) return null

  const getImageSrc = (img) => {
    if (!img) return ''
    if (typeof img === 'string') return img
    if (typeof img === 'object' && img.src) return img.src
    return ''
  }

  const getImageCaption = (img) => {
    if (!img || typeof img !== 'object') return null
    return img.caption || null
  }

  const images = project.images || []
  const hasMultipleImages = images.length > 1
  const currentImage = images.length > 0 ? images[currentImageIndex] : null
  const currentCaption = currentImage ? getImageCaption(currentImage) : null

  const nextImage = () => {
    if (images.length === 0) return
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    if (images.length === 0) return
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <motion.div
      className="project-modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="project-modal"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="project-modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="project-modal-header">
          <div className="project-modal-meta">
            <span>{project.year}</span>
            <span>Feature Project</span>
          </div>
          <h2 className="project-modal-title">{project.title}</h2>
        </div>

        <div className="project-modal-content">
          <div className="project-modal-images">
            {images.length > 0 && currentImage && (
              <div className="project-modal-carousel">
                <div className="project-modal-carousel-container">
                  {hasMultipleImages && (
                    <button
                      className="project-modal-carousel-btn project-modal-carousel-btn--prev"
                      onClick={prevImage}
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                  )}
                  <div className="project-modal-carousel-image-wrapper">
                    {currentImage && getImageSrc(currentImage) && (
                      <>
                        <img
                          src={getImageSrc(currentImage)}
                          alt={project.imageAlt || `${project.title} - Image ${currentImageIndex + 1}`}
                          className="project-modal-main-image"
                          onError={(e) => {
                            e.target.style.display = 'none'
                          }}
                        />
                        {currentCaption && (
                          <p className="project-modal-image-caption">{currentCaption}</p>
                        )}
                      </>
                    )}
                  </div>
                  {hasMultipleImages && (
                    <button
                      className="project-modal-carousel-btn project-modal-carousel-btn--next"
                      onClick={nextImage}
                      aria-label="Next image"
                    >
                      ›
                    </button>
                  )}
                </div>
                {hasMultipleImages && (
                  <div className="project-modal-carousel-indicators">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        className={`project-modal-carousel-indicator ${
                          idx === currentImageIndex ? 'active' : ''
                        }`}
                        onClick={() => setCurrentImageIndex(idx)}
                        aria-label={`Go to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="project-modal-details">
            <p className="project-modal-description">{project.detailedDescription || project.description}</p>

            <div className="project-modal-tools">
              {project.toolsets.map((set) => (
                <div key={set.label} className="toolset">
                  <p className="toolset-label">{set.label}</p>
                  <div className="toolset-tags">
                    {set.items.map((tool) => (
                      <span key={tool} className="tag">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="project-modal-links">
              {project.githubLink && (
                <a
                  className="btn btn-primary"
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
              )}
              {project.demoLink && (
                <a
                  className="btn btn-outline"
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.demoLink.includes('youtube.com') || project.demoLink.includes('youtu.be')
                    ? 'Watch Demo'
                    : project.demoLink.toLowerCase().endsWith('.pdf')
                    ? 'View Report'
                    : 'Live Demo'}
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  return (
    <div className="app-shell">
      <div 
        className="newspaper-background" 
        style={{ backgroundImage: `url(${newspaperBackground})` }}
        aria-hidden="true" 
      />
      <div className="noise-overlay" aria-hidden="true" />
      <div className="paper-aging" aria-hidden="true" />
      <div className="floating-glow floating-glow--one" aria-hidden="true" />
      <div className="floating-glow floating-glow--two" aria-hidden="true" />

      <div className="content">
        <motion.nav
          className="nav"
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="brand">Danish Hakim</span>
          <div className="nav-links">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </motion.nav>

        <header className="hero" id="home">
          <div className="hero-layout">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.2 }}
            >
              <motion.span
                className="hero-intro"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.35 }}
              >
               Portfolio / 2025
              </motion.span>

              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
              >
                <Typewriter
                  texts={[
                    'Hello, I am Danish.',
                    'I am a Fourth-Year Biomedical Engineering + CS student at UBC.',
                    'Please, take a look at my projects and experience!',
                  ]}
                  typingSpeed={50}
                  deletingSpeed={30}
                  pauseTime={2000}
                />
              </motion.h1>

              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.75 }}
              >
                <a className="btn btn-primary" href="#projects">
                  View Projects
                </a>
                <a
                  className="btn btn-outline"
                  href="mailto:danhakim006@gmail.com"
                >
                  Contact Me
                </a>
                <a
                  className="btn btn-outline"
                  href="/Danish_Resume (4).pdf"
                  download
                >
                  Download Resume
                </a>
              </motion.div>
            </motion.div>

            <motion.figure
              className="hero-portrait"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.4 }}
            >
              <img src={heroPortrait} alt="Portrait of Danish" />
            </motion.figure>
          </div>
        </header>

        <Section
          id="experience"
          eyebrow="Chronicle"
          title="Experience Timeline"
        >
          <motion.ol
            className="timeline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            {experienceTimeline.map((item) => (
              <motion.li
                key={item.title}
                className="timeline-item"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-content">
                  <p className="timeline-period">{item.period}</p>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-summary">{item.summary}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </Section>

        <Section id="projects" eyebrow="Selected" title="Projects">
          <motion.div
            className="projects-grid"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {projects && projects.length > 0 ? projects.map((project) => (
              <motion.article
                key={project.title}
                className="project-card"
                initial={{ opacity: 1, y: 0 }}
                variants={{
                  hidden: { opacity: 0, y: 32 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                onClick={() => setSelectedProject(project)}
                style={{ cursor: 'pointer', opacity: 1, visibility: 'visible' }}
              >
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.imageAlt || project.title}
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
                <div className="project-meta">
                  <span>{project.year}</span>
                  <span>Feature Project</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tools">
                  {project.toolsets.map((set) => (
                    <div key={set.label} className="toolset">
                      <p className="toolset-label">{set.label}</p>
                      <div className="toolset-tags">
                        {set.items.map((tool) => (
                          <span key={tool} className="tag">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="project-link"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedProject(project)
                  }}
                >
                  Explore project {'->'}
                </button>
              </motion.article>
            )) : <p>No projects available</p>}
          </motion.div>
        </Section>

        <Section id="awards" eyebrow="Notices" title="Awards & Scholarships">
          <motion.ul
            className="awards-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {awards.map((item) => (
              <motion.li
                key={item.title}
                className="award-card"
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <div className="award-meta">
                  <span className="award-year">{item.year}</span>
                </div>
                <h3 className="award-title">{item.title}</h3>
                <p className="award-detail">{item.detail}</p>
              </motion.li>
            ))}
          </motion.ul>
        </Section>

        <Section
          id="contact"
          eyebrow="Collaborate"
          title="Contact Me"
        >
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="contact-text">
              Open to collaborations, job opportunities, and innovative projects.
              Feel free to reach out via email or connect on LinkedIn and GitHub.
            </p>
            <div className="contact-links">
              <a className="btn btn-primary" href="mailto:danhakim006@gmail.com">
                Email Me
              </a>
              <a
                className="btn btn-outline"
                href="https://www.linkedin.com/in/danish-hakim06/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="btn btn-outline"
                href="https://github.com/danishhakim1"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </Section>

        <footer className="footer">
          {new Date().getFullYear()} Danish - Crafted with intention in React.
        </footer>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}

export default App
