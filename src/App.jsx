import React, { useState } from 'react';
import {
  Zap,
  Database,
  Share2,
  ShieldCheck,
  TrendingDown,
  Cpu,
  Layers,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  FileText,
  Terminal,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const models = [
    { name: 'GPT-4o', latency: 'High', cost: '₹425.00', reliability: 'Elite', type: 'Reasoning' },
    { name: 'Grok-1', latency: 'Med', cost: '₹380.00', reliability: 'High', type: 'Reasoning' },
    { name: 'Gemini 1.5', latency: 'Med', cost: '₹300.00', reliability: 'High', type: 'General' },
    { name: 'Claude 3.5', latency: 'Med', cost: '₹255.00', reliability: 'Elite', type: 'Research' },
    { name: 'DeepSeek-V3', latency: 'Low', cost: '₹12.00', reliability: 'High', type: 'Efficient' },
    { name: 'SmartRoute (Ours)', latency: 'Instant', cost: '< ₹8.50', reliability: 'Optimized', type: 'Intelligent' },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="app">
      <nav className="glass-nav">
        <div className="logo">
          <Zap size={24} /> SmartRoute
        </div>
        <div className="nav-links">
          <a href="#workflow">Workflow</a>
          <a href="#scope">Scope</a>
          <a href="#pricing">Cost Savings</a>
          <a href="#benefits">Professional Edge</a>
        </div>
        <button className="btn-primary">Get Access</button>
      </nav>

      <header className="hero">
        <div className="hero-glow"></div>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          SmartRoute: The Hybrid <br />
          <span style={{ color: 'var(--secondary)' }}>GraphRAG</span> Engine
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Enterprise-grade GraphRAG middleware that slashes API costs by 90%
          while eliminating hallucinations through relationship-aware context.
        </motion.p>
        <motion.div
          className="hero-btns"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            className="btn-primary"
            onClick={() => document.getElementById('benefits').scrollIntoView({ behavior: 'smooth' })}
          >
            Deploy Middleware
          </button>
          <button
            style={{ background: 'transparent', border: '1px solid var(--card-border)', marginLeft: '15px' }}
            className="btn-primary"
            onClick={() => setIsModalOpen(true)}
          >
            <FileText size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            Read Whitepaper
          </button>
        </motion.div>
      </header>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setIsModalOpen(false)}><X /></button>
              <h2>Technical Summary: SmartRoute v1.0</h2>
              <div className="modal-body">
                <div className="abstract-box">
                  <p><strong>Abstract:</strong> This architectural framework addresses the dual challenges of high operational costs and "hallucinations" in enterprise LLM applications. By integrating a <strong>Knowledge Graph layer</strong> with a <strong>dynamic router</strong>, we achieve relationship-aware context and cost-optimized model selection.</p>
                </div>

                <h3>Architecture Overview</h3>
                <div className="code-block">
                  <Terminal size={14} style={{ marginBottom: '10px' }} />
                  <code>
                    query -&gt; GraphRAG(Neo4j + ChromaDB) -&gt; ContextRefined() <br />
                    ContextRefined -&gt; SmartRoute(QueryComplexity) -&gt; ModelTarget <br />
                    ModelTarget(Simple) -&gt; Llama-3-8b <br />
                    ModelTarget(Complex) -&gt; GPT-4o
                  </code>
                </div>

                <h3>Key Methodology</h3>
                <ul>
                  <li><strong>Hybrid Retrieval:</strong> Combines vector similarity with structural relationships.</li>
                  <li><strong>Token Optimization:</strong> Minimized token counts via precise context indexing.</li>
                  <li><strong>Sustainable AI:</strong> Production-ready framework for financial sustainability.</li>
                </ul>

                <button className="btn-primary" style={{ width: '100%', marginTop: '20px' }} onClick={() => setIsModalOpen(false)}>
                  Download Full PDF (Coming Soon)
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="workflow" className="section">
        <h2 className="section-title">The Smart Methodology</h2>
        <div className="methodology-container">
          <motion.div
            className="methodology-step"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="step-icon-large"><Database size={32} /></div>
            <div className="step-content">
              <span className="step-tag">Phase 01</span>
              <h3>Knowledge Extraction</h3>
              <p>
                We ingest your unstructured enterprise data into a <strong>dynamic Knowledge Graph</strong>.
                Using Neo4j, we map complex entity relationships that standard vector databases miss.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="methodology-step"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="step-icon-large" style={{ background: 'var(--gradient-2)' }}><Layers size={32} /></div>
            <div className="step-content">
              <span className="step-tag">Phase 02</span>
              <h3>Hybrid GraphRAG Refinement</h3>
              <p>
                Our retrieval engine combines <strong>Vector Similarity</strong> with <strong>Graph Traversal</strong>.
                This results in relationship-aware context that eliminates hallucinations and reduces token noise.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="methodology-step"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="step-icon-large" style={{ background: 'var(--accent)' }}><Share2 size={32} /></div>
            <div className="step-content">
              <span className="step-tag">Phase 03</span>
              <h3>Intelligent SmartRoute</h3>
              <p>
                A decision-gate middleware analyzes query intent. <strong>Simple tasks</strong> are routed to low-cost models (Llama-3),
                while <strong>complex reasoning</strong> triggers high-tier models (GPT-4o), ensuring maximum cost-efficiency.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="pricing" className="section" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <h2 className="section-title">Cost Comparison</h2>
        <div className="comparison-container">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Model</th>
                <th>Avg. Cost / 1M Tokens</th>
                <th>Wait Time</th>
                <th>Task Relevance</th>
                <th>Optimization</th>
              </tr>
            </thead>
            <tbody>
              {models.map((m, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: '600' }}>{m.name}</td>
                  <td style={{ color: m.cost.includes('<') ? 'var(--secondary)' : 'inherit' }}>{m.cost}</td>
                  <td>{m.latency}</td>
                  <td>{m.type}</td>
                  <td>
                    <span className={`status-badge ${m.name.includes('Smart') ? 'status-low' :
                      m.cost.includes('$5.00') ? 'status-high' : 'status-mid'
                      }`}>
                      {m.reliability}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ marginTop: '20px', color: 'var(--text-muted)', textAlign: 'center' }}>
            *Estimates based on current token pricing as of 2026. SmartRoute saves an average of <span style={{ color: 'var(--secondary)' }}>₹4,00,000+ per month</span> for mid-scale enterprises.
          </p>
        </div>
      </section>

      <section id="scope" className="section">
        <h2 className="section-title">Deployment Scope</h2>
        <div className="grid">
          <div className="card">
            <ShieldCheck className="icon-secondary" color="var(--primary)" size={32} />
            <h3>Enterprise Compliance</h3>
            <p>Securely route sensitive data. Use local models for PII and cloud models for general reasoning.</p>
          </div>
          <div className="card">
            <TrendingDown className="icon-secondary" color="var(--secondary)" size={32} />
            <h3>Massive Scale SaaS</h3>
            <p>Handling millions of queries? SmartRoute's middleware prevents API bill shocks during peak traffic.</p>
          </div>
          <div className="card">
            <Cpu className="icon-secondary" color="var(--accent)" size={32} />
            <h3>Hyper-Specialized RAG</h3>
            <p>Ideal for Legal, Medical, and Engineering firms where "close enough" isn't good enough.</p>
          </div>
        </div>
      </section>

      <section id="tech-stack" className="section" style={{ background: 'rgba(59, 130, 246, 0.05)' }}>
        <h2 className="section-title">The Intelligent Stack</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', textAlign: 'center' }}>
          <div className="tech-item">
            <div className="icon-wrapper" style={{ margin: '0 auto 20px' }}><Database /></div>
            <h4>ChromaDB / Pinecone</h4>
            <p style={{ fontSize: '0.9rem' }}>Vector Embeddings</p>
          </div>
          <div className="tech-item">
            <div className="icon-wrapper" style={{ margin: '0 auto 20px', background: 'var(--gradient-2)' }}><Share2 /></div>
            <h4>Neo4j</h4>
            <p style={{ fontSize: '0.9rem' }}>Knowledge Graph</p>
          </div>
          <div className="tech-item">
            <div className="icon-wrapper" style={{ margin: '0 auto 20px', background: 'var(--accent)' }}><Cpu /></div>
            <h4>Python Orchestration</h4>
            <p style={{ fontSize: '0.9rem' }}>Middleware Logic</p>
          </div>
          <div className="tech-item">
            <div className="icon-wrapper" style={{ margin: '0 auto 20px', background: '#f59e0b' }}><Zap /></div>
            <h4>Llama-3 / GPT-4o</h4>
            <p style={{ fontSize: '0.9rem' }}>Interchangeable LLMs</p>
          </div>
        </div>
      </section>

      <section id="routing-logic" className="section" style={{ background: 'rgba(59, 130, 246, 0.02)' }}>
        <h2 className="section-title">How Routing Works</h2>
        <div className="routing-diagram-container">
          <div className="diagram-flow">
            <motion.div
              className="diagram-node"
              whileHover={{ scale: 1.05 }}
            >
              <h5>User Query</h5>
              <p>Natural mapping of intent...</p>
            </motion.div>

            <div className="diagram-arrow"></div>

            <motion.div
              className="decision-gate"
              animate={{ boxSizing: ['border-box', 'content-box'], opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <div className="decision-content">SmartRoute<br />Gateway</div>
            </motion.div>

            <div className="diagram-arrow"></div>

            <div className="path-split">
              <motion.div
                className="diagram-node"
                style={{ borderColor: 'var(--secondary)' }}
                whileHover={{ scale: 1.05 }}
              >
                <h5>Efficiency Path</h5>
                <p>Llama-3-8b / DeepSeek-V3</p>
                <div style={{ color: 'var(--secondary)', fontSize: '0.7rem' }}>Complexity Score &lt; 0.4</div>
              </motion.div>

              <motion.div
                className="diagram-node"
                style={{ borderColor: 'var(--accent)' }}
                whileHover={{ scale: 1.05 }}
              >
                <h5>Performance Path</h5>
                <p>GPT-4o / Claude 3.5</p>
                <div style={{ color: 'var(--accent)', fontSize: '0.7rem' }}>Complexity Score &gt; 0.4</div>
              </motion.div>
            </div>
          </div>
          <p style={{ textAlign: 'center', marginTop: '40px', color: 'var(--text-muted)' }}>
            Our <strong>AI Decision Engine</strong> calculates a <strong>Query Complexity Score</strong> in &lt; 50ms,
            choosing the perfect balance between performance and cost.
          </p>
        </div>
      </section>

      <section id="vendor-benefits" className="section">
        <h2 className="section-title">Benefits for Vendors &amp; Partners</h2>
        <div className="vendor-benefits-grid">
          <div className="vendor-card">
            <h4>Optimized Traffic Load</h4>
            <p>We reduce redundant load on high-tier models, ensuring your premium reasoning resources are used only for complex, high-value tasks.</p>
          </div>
          <div className="vendor-card">
            <h4>Sustainable Growth</h4>
            <p>SmartRoute makes AI economically viable for enterprises, leading to higher long-term retention and deeper usage of model APIs.</p>
          </div>
          <div className="vendor-card">
            <h4>Hybrid Integration</h4>
            <p>Easily plug your specialized models into our routing mesh. We highlight your model's strengths to the right enterprise users.</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="section" style={{ background: '#020617' }}>
        <div className="grid" style={{ alignItems: 'center' }}>
          <div>
            <h2 style={{ textAlign: 'left', marginBottom: '30px' }}>Professional Benefits</h2>
            <div className="workflow-step">
              <div className="step-number"><CheckCircle2 size={20} /></div>
              <div>
                <h4>For Business Executives</h4>
                <p>Predictable AI spending and verifiable ROI. No more unpredictable monthly API bills.</p>
              </div>
            </div>
            <div className="workflow-step">
              <div className="step-number"><CheckCircle2 size={20} /></div>
              <div>
                <h4>For Data Engineers</h4>
                <p>Plug-and-play middleware. Supports Neo4j, ChromaDB, and Pinecone out of the box.</p>
              </div>
            </div>
            <div className="workflow-step">
              <div className="step-number"><CheckCircle2 size={20} /></div>
              <div>
                <h4>For Legal Professionals</h4>
                <p>GraphRAG provides "Source Traceability." Every claim is grounded in structured enterprise relationships.</p>
              </div>
            </div>
            <div className="workflow-step">
              <div className="step-number"><CheckCircle2 size={20} /></div>
              <div>
                <h4>For Healthcare & Research</h4>
                <p>Ensures medical context is 100% accurate by mapping clinical entities in a knowledge graph before generation.</p>
              </div>
            </div>
          </div>
          <div className="card" style={{ background: 'var(--gradient-1)', border: 'none', position: 'relative', overflow: 'hidden' }}>
            <h3 style={{ color: 'white' }}>Ready to optimize?</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>
              Join 50+ businesses currently using SmartRoute to make AI sustainable.
              Fill the form below to receive your custom ROI analysis.
            </p>

            <form
              action="https://formspree.io/23tec2cs758@vgu.ac.in"
              method="POST"
              className="form-container"
            >
              <input type="hidden" name="_to" value="23tec2cs758@vgu.ac.in" />
              <div className="form-group">
                <label>Work Email</label>
                <input name="email" type="email" required className="form-input" placeholder="you@company.com" />
              </div>
              <div className="form-group">
                <label>Company Name</label>
                <input name="company" type="text" required className="form-input" placeholder="TechCorp Inc." />
              </div>
              <div className="form-group">
                <label>Query Volume (Monthly)</label>
                <select name="volume" className="form-input">
                  <option>10k - 100k</option>
                  <option>100k - 1M</option>
                  <option>1M+</option>
                </select>
              </div>
              <button type="submit" className="btn-primary" style={{ background: 'white', color: 'var(--primary)', boxShadow: 'none', marginTop: '10px' }}>
                Schedule Demo <ArrowRight size={18} inline />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer style={{ padding: '60px 10%', borderTop: '1px solid var(--card-border)', textAlign: 'center' }}>
        <div className="logo" style={{ justifyContent: 'center', marginBottom: '20px' }}>
          <Zap size={20} /> SmartRoute AI
        </div>
        <p style={{ color: 'var(--text-muted)' }}>© 2026 SmartRoute Technologies. Built for the sustainable AI era.</p>
      </footer>
    </div>
  );
};

export default App;
