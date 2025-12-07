'use client'

import { useEffect } from 'react'
import '../app/metrc-presentation.css'

export default function MetrcPresentation({ onBack }) {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Epilogue:wght@300;400;600;700;800&display=swap'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    // Slide navigation JavaScript
    let currentSlide = 0
    const slides = document.querySelectorAll('.metrc-presentation .slide')
    const navDots = document.querySelectorAll('.metrc-presentation .nav-dot')

    window.goToSlide = function(n) {
      if (slides[currentSlide]) {
        slides[currentSlide].classList.remove('active')
        navDots[currentSlide].classList.remove('active')
      }

      currentSlide = n

      if (slides[currentSlide]) {
        slides[currentSlide].classList.add('active')
        navDots[currentSlide].classList.add('active')
      }
    }

    // Keyboard navigation
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        if (currentSlide < slides.length - 1) {
          window.goToSlide(currentSlide + 1)
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentSlide > 0) {
          window.goToSlide(currentSlide - 1)
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    // Touch navigation
    let touchStartX = 0
    let touchEndX = 0

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX
    }

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX
      handleSwipe()
    }

    const handleSwipe = () => {
      if (touchEndX < touchStartX - 50 && currentSlide < slides.length - 1) {
        window.goToSlide(currentSlide + 1)
      }
      if (touchEndX > touchStartX + 50 && currentSlide > 0) {
        window.goToSlide(currentSlide - 1)
      }
    }

    document.addEventListener('touchstart', handleTouchStart)
    document.addEventListener('touchend', handleTouchEnd)

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchend', handleTouchEnd)
      document.head.removeChild(link)
    }
  }, [])

  const presentationHTML = `
    <div class="bg-pattern"></div>
    <div class="logo">METRC</div>
    <button class="back-button" onclick="window.metrcBackToMenu()">← Back to Menu</button>

    <div class="presentation">
        <!-- Slide 1: Title -->
        <div class="slide active" data-slide="0">
            <div class="slide-number">01</div>
            <div class="slide-content">
                <h1>Metrc Global<br>Product Registry</h1>
                <p class="subtitle">Becoming the industry source of truth</p>
                <div class="highlight-box">
                    <p>A centralized product registry that unifies siloed state data, enables true interstate tracking, and establishes Metrc as the cannabis industry's single source of truth.</p>
                </div>
            </div>
        </div>

        <!-- Slide 2: The Challenge -->
        <div class="slide" data-slide="1">
            <div class="slide-number">02</div>
            <div class="slide-content">
                <h2>The Fragmented Landscape</h2>
                <div class="two-col">
                    <div>
                        <h3>🔗 The Core Problem</h3>
                        <ul>
                            <li>No centralized source of truth for product data</li>
                            <li>State-by-state regulatory silos prevent data linking</li>
                            <li>Multi-state brands can't track or aggregate their data</li>
                            <li>Industry lacks flexibility for federal regulation changes</li>
                        </ul>
                    </div>
                    <div>
                        <h3>👥 Who This Impacts</h3>
                        <div class="stakeholder-grid">
                            <div class="stakeholder-card">
                                <h4>Regulators</h4>
                                <ul>
                                    <li>Need single source of truth</li>
                                    <li>Require seed-to-sale tracking</li>
                                </ul>
                            </div>
                            <div class="stakeholder-card">
                                <h4>Brands</h4>
                                <ul>
                                    <li>Must ensure compliance</li>
                                    <li>Need quality control data</li>
                                </ul>
                            </div>
                            <div class="stakeholder-card">
                                <h4>Retailers</h4>
                                <ul>
                                    <li>Compliance requirements</li>
                                    <li>Consumer trust building</li>
                                </ul>
                            </div>
                            <div class="stakeholder-card">
                                <h4>Software Vendors</h4>
                                <ul>
                                    <li>Lack central data access</li>
                                    <li>Can't build integrated tools</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Slide 3: The Opportunity -->
        <div class="slide" data-slide="2">
            <div class="slide-number">03</div>
            <div class="slide-content">
                <h2>The Strategic Opportunity</h2>
                <p class="subtitle">Leverage existing datasets to expand into B2B SaaS and establish a single source of truth for the industry</p>

                <div class="visual-diagram">
                    <div class="diagram-center">Product<br>Registry</div>
                    <div class="diagram-node">🏛️<br>Regulators<br><small>Trusted Data</small></div>
                    <div class="diagram-node">🏢<br>Brands<br><small>Multi-State Tracking</small></div>
                    <div class="diagram-node">🏪<br>Retailers<br><small>Consumer Trust</small></div>
                    <div class="diagram-node">💻<br>Vendors<br><small>Integration Access</small></div>
                </div>

                <div class="highlight-box">
                    <p><strong>Retail ID as the entry point:</strong> A standardized identifier linking all stakeholders to a global source of truth</p>
                </div>

                <h3 style="margin-top: 3rem;">
                🎯 Vision and Foundation Principles
                </h3>
                <div class="vision-grid">
                    <div class="vision-card">
                        <h4>Built for Scale</h4>
                        <p>Every seed, sale, product, and movement nationwide</p>
                    </div>
                    <div class="vision-card">
                        <h4>Flexible</h4>
                        <p>Adapts as regulations evolve in a young industry</p>
                    </div>
                    <div class="vision-card">
                        <h4>Trustworthy</h4>
                        <p>Auditable, secure, and easily traceable data</p>
                    </div>
                    <div class="vision-card">
                        <h4>Agnostic</h4>
                        <p>Every actor can leverage data for their needs</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Slide 4: Strategy Transition -->
        <div class="slide" data-slide="3">
            <div class="slide-number">04</div>
            <div class="slide-content">
                <h2>Our Strategy</h2>
                <p class="subtitle">How we'll establish ourselves as the industry source of truth</p>

                <div class="highlight-box" style="margin-top: 3rem; margin-bottom: 3rem;">
                    <p style="font-size: 1.5rem; line-height: 1.6;"><strong>Launch with integrations-first approach</strong> to gather real-world feedback from diverse partners, enabling rapid iteration on the foundation while maintaining data integrity</p>
                </div>

                <h3>🎯 Strategic Priorities Enable Us To:</h3>
                <div class="content-section">
                    <ul style="font-size: 1.25rem;">
                        <li><strong>Establish a strong foundation</strong> as the industry source of truth to build upon</li>
                        <li><strong>Leverage Metrc's existing state-level data</strong> to hydrate this new offering from the start</li>
                        <li><strong>Iterate early and often</strong> using feedback from a wide range of partners by entering the market as an integrations-first product</li>
                    </ul>
                </div>

                <div class="icon-large" style="text-align: center; margin-top: 3rem; opacity: 0.6;">⚡</div>
            </div>
        </div>

        <!-- Slide 5: Initial Priorities -->
        <div class="slide" data-slide="4">
            <div class="slide-number">05</div>
            <div class="slide-content">
                <h2>Initial Scope</h2>
                <p class="subtitle">Building the foundation to scale</p>

                <div class="priority-section">
                    <h4>🏗️ Foundation: Scalable Registry Infrastructure</h4>
                    <ul>
                        <li>Standardized data model supporting Retail ID, B2B SaaS, and analytics</li>
                        <li>Migration system for existing state-specific data</li>
                        <li>Product storage with full historical logging (identifiers, profiling, compliance)</li>
                        <li>Configurable, permission-based data access</li>
                    </ul>
                    <span class="scope-label">Focused on source tracking, not full supply chain movement</span>
                </div>

                <div class="priority-section">
                    <h4>🔌 Integrations: Market Entry Strategy</h4>
                    <ul>
                        <li>Public APIs with secured, scoped access</li>
                        <li>Enable Retail ID to pull from Product Registry</li>
                        <li>Metrc Certified ☑️ program for qualified vendor partnerships</li>
                    </ul>
                    <span class="scope-label">Launch: READ operations only</span>
                </div>

                <div class="highlight-box" style="margin-top: 2rem;">
                    <p><strong>Why This Sequence?</strong> Establish solid foundation → Leverage existing data → Drive adoption through integrations → Learn and iterate</p>
                </div>
            </div>
        </div>

        <!-- Slide 6: Validation & Iteration -->
        <div class="slide" data-slide="5">
            <div class="slide-number">06</div>
            <div class="slide-content">
                <h2>Future Validation & Iteration</h2>

                <div class="content-section">
                    <h3>🔬 Additional Integration Points</h3>
                    <p style="color: #aaa; margin-bottom: 0.75rem;"><strong>Hypothesis:</strong> Future use cases will require other transaction types and event-based notifications from the Registry.</p>
                    <p style="color: #ccc; margin-bottom: 1.5rem;"><strong style="color: #FFB81C;">Action:</strong> Validate need of other integration points with early feedback and key partnerships.</p>
                </div>

                <div class="content-section">
                    <h3>🏛️ Regulator Needs & Commercial Approach</h3>
                    <p style="color: #aaa; margin-bottom: 0.75rem;"><strong>Hypothesis:</strong> Until federal regulations change, state regulator bodies will stay focused on their state-specific data. Additional interstate and supply chain metadata will be needed when regulations change.</p>
                    <p style="color: #ccc; margin-bottom: 1.5rem;"><strong style="color: #FFB81C;">Action:</strong> Validate what the inflection point is for a non-state-specific regulatory data exchange through discovery process with stakeholders across brand and regulator stakeholders.</p>
                </div>

                <div class="content-section">
                    <h3>👥 Consumer-Facing Strategy</h3>
                    <p style="color: #aaa; margin-bottom: 0.75rem;"><strong>Hypothesis:</strong> Consumers won't pay Metrc directly for the data, but consumers would value the data in that it helps them know what brands and retailers to trust.</p>
                    <p style="color: #ccc;"><strong style="color: #FFB81C;">Action:</strong> Need to validate brand and retailer interest in providing this trust to consumers, their willingness to pay for it, and what requirements they have for a minimal buyable product.</p>
                </div>
            </div>
        </div>

        <!-- Slide 7: Rollout & KPIs -->
        <div class="slide" data-slide="6">
            <div class="slide-number">07</div>
            <div class="slide-content">
                <h2>Rollout Strategy & Success Metrics</h2>

                <div class="content-section">
                    <h3>🚀 Dual Adoption Strategy</h3>
                    <div class="two-col">
                        <div>
                            <h4 style="color: #FFB81C; font-size: 1.25rem; margin-bottom: 1rem;">Partner with Software Vendors</h4>
                            <p style="color: #ccc; line-height: 1.6;">Push integrations through third-party platforms that serve the industry</p>
                        </div>
                        <div>
                            <h4 style="color: #FFB81C; font-size: 1.25rem; margin-bottom: 1rem;">Engage Brands & Retailers</h4>
                            <p style="color: #ccc; line-height: 1.6;">Demonstrate value directly, creating demand that pulls vendors to integrate</p>
                        </div>
                    </div>
                </div>

                <h3 style="margin-top: 2rem;">📊 Key Performance Indicators</h3>
                <div class="metric-grid">
                    <div class="metric-card">
                        <div class="metric-icon">📦</div>
                        <div class="metric-title">Market Coverage</div>
                        <div class="metric-desc">
                            • Registry % vs Metrc state data<br>
                            • Registry % vs industry data<br>
                            <em>Validates migration system</em>
                        </div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-icon">🔗</div>
                        <div class="metric-title">Integration Growth</div>
                        <div class="metric-desc">
                            • 3rd party vendor count (QoQ)<br>
                            • API transaction volume (MoM)<br>
                            <em>Measures ecosystem adoption</em>
                        </div>
                    </div>
                    <div class="metric-card">
                        <div class="metric-icon">📈</div>
                        <div class="metric-title">Data Utilization</div>
                        <div class="metric-desc">
                            • % of dataset accessed by partners<br>
                            <em>Tracks real value delivery</em>
                        </div>
                    </div>
                </div>

                <div class="highlight-box" style="margin-top: 2rem;">
                    <p><strong>Success = Registry becomes the default integration point for cannabis software ecosystem</strong></p>
                </div>
            </div>
        </div>
    </div>

    <div class="navigation">
        <div class="nav-dot active" onclick="goToSlide(0)"></div>
        <div class="nav-dot" onclick="goToSlide(1)"></div>
        <div class="nav-dot" onclick="goToSlide(2)"></div>
        <div class="nav-dot" onclick="goToSlide(3)"></div>
        <div class="nav-dot" onclick="goToSlide(4)"></div>
        <div class="nav-dot" onclick="goToSlide(5)"></div>
        <div class="nav-dot" onclick="goToSlide(6)"></div>
    </div>
  `

  useEffect(() => {
    // Set up back button handler
    window.metrcBackToMenu = onBack

    return () => {
      delete window.metrcBackToMenu
    }
  }, [onBack])

  return (
    <div
      className="metrc-presentation"
      dangerouslySetInnerHTML={{ __html: presentationHTML }}
    />
  )
}
