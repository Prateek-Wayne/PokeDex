'use client';

import {
  ArrowRight,
  Briefcase,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Star,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type {
  ContactLink,
  DataSource,
  FeatureConfig,
  FooterLink,
} from './config';
import { aboutConfig } from './config';

const WIDE_INDICES = new Set([13]);

function Hero() {
  const { hero } = aboutConfig;

  return (
    <section className='px-6 pt-20 pb-12 md:pt-28 md:pb-16'>
      <div className='max-w-3xl mx-auto'>
        <div className='text-[10px] text-muted-foreground/70 uppercase tracking-[0.3em] mb-8 font-medium'>
          v{process.env.NEXT_PUBLIC_APP_VERSION}
        </div>

        <h1 className='text-5xl md:text-7xl font-semibold tracking-tighter mb-6'>
          {hero.title}
        </h1>

        <div className='flex items-center gap-2 mb-6'>
          <span className='text-muted-foreground/50 select-none'>{'>'}</span>
          <p className='text-lg md:text-xl text-muted-foreground'>
            {hero.tagline}
            <span className='inline-block w-[2px] h-[1.1em] bg-foreground/50 ml-1 align-text-bottom animate-pulse' />
          </p>
        </div>

        <p className='text-sm text-muted-foreground/80 max-w-md leading-relaxed mb-10'>
          {hero.description}
        </p>

        {hero.cta && (
          <Link
            href={hero.cta.href}
            className='group inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity'
          >
            {hero.cta.label}
            <ArrowRight className='size-4 group-hover:translate-x-0.5 transition-transform' />
          </Link>
        )}
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  isWide,
}: {
  feature: FeatureConfig;
  isWide: boolean;
}) {
  const Icon = feature.icon;

  return (
    <div
      className={cn(
        'group relative border border-foreground/[0.06] bg-background p-5 md:p-6 transition-colors hover:border-foreground/[0.12] hover:bg-muted/20',
        isWide && 'md:col-span-2',
      )}
    >
      <div
        className='absolute left-0 top-0 w-[2px] h-full opacity-0 group-hover:opacity-100 transition-opacity'
        style={{ backgroundColor: feature.accent }}
      />
      <div className='flex items-start gap-4'>
        <div className='shrink-0 mt-0.5' style={{ color: feature.accent }}>
          <Icon className='size-4' />
        </div>
        <div>
          <h3 className='text-sm font-medium mb-1.5'>{feature.title}</h3>
          <p className='text-xs text-muted-foreground/80 leading-relaxed'>
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function Features() {
  const { features } = aboutConfig;

  return (
    <section className='px-6 py-12 md:py-16'>
      <div className='max-w-3xl mx-auto'>
        <div className='text-[10px] text-muted-foreground/70 uppercase tracking-[0.3em] mb-8 font-medium'>
          Features
        </div>
        <div className='grid md:grid-cols-3 gap-3'>
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              isWide={WIDE_INDICES.has(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { footerLinks, attribution, contact } = aboutConfig;

  return (
    <footer className='px-6 py-12 mt-4 border-t border-foreground/[0.06]'>
      <div className='max-w-3xl mx-auto space-y-6'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
          <div className='flex items-center gap-4'>
            <span className='text-xs text-muted-foreground/70'>
              {contact.title}{' '}
              <a
                href={contact.handleHref}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-foreground transition-colors'
              >
                {contact.handle}
              </a>
            </span>
            <div className='flex items-center gap-3'>
              {contact.links.map((link: ContactLink) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-muted-foreground/60 hover:text-foreground transition-colors'
                    aria-label={link.label}
                  >
                    <Icon className='size-3.5' />
                  </a>
                );
              })}
            </div>
          </div>
          <div className='flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground/70'>
            {footerLinks.map((link: FooterLink) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-foreground transition-colors'
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className='hover:text-foreground transition-colors'
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>
        <p className='text-[10px] text-muted-foreground/50 leading-relaxed'>
          data via{' '}
          {attribution.dataSources.map((source: DataSource, index: number) => (
            <span key={source.label}>
              <a
                href={source.href}
                target='_blank'
                rel='noopener noreferrer'
                className='underline underline-offset-2 hover:text-muted-foreground/80'
              >
                {source.label}
              </a>
              {index < attribution.dataSources.length - 1 && ' & '}
            </span>
          ))}
          {' · '}
          {attribution.disclaimer}
        </p>
      </div>
    </footer>
  );
}

// =============================================================================
// Developer Profile Section
// =============================================================================

const skills = {
  Languages: ['Java', 'JavaScript', 'TypeScript'],
  Frontend: ['React.js', 'Micro Frontends', 'HTML/CSS', 'Context API'],
  Backend: [
    'Spring Boot',
    'Node.js',
    'Express.js',
    'RESTful APIs',
    'Microservices',
  ],
  'AI & Automation': ['LangChain', 'LangGraph', 'MCP', 'OpenAI', 'Claude'],
  'Cloud & DevOps': [
    'AWS (EKS, ECR, S3)',
    'Kubernetes',
    'Docker',
    'GitHub Actions',
    'Helm',
  ],
  Observability: [
    'Prometheus',
    'OpenTelemetry',
    'Grafana',
    'Distributed Tracing',
  ],
};

const experience = [
  {
    company: 'Philips',
    role: 'Software Development Engineer I',
    period: 'Apr 2024 – Present',
    highlights: [
      'Designed full-stack features for Ultrasound Fleet Manager — React.js frontends, Spring Boot & Node.js backend services across 7+ microservices.',
      'Optimized high-latency APIs via caching and query tuning, reducing response time by 15% (400ms → 340ms).',
      'Architected observability platform with Prometheus, OpenTelemetry & Grafana — automated alerting and distributed tracing in production.',
      'Standardized CI/CD pipelines across 11+ repositories; automated microservice scaffolding via Backstage, cutting onboarding time by 90%.',
    ],
  },
  {
    company: 'Philips',
    role: 'Software Development Intern',
    period: 'Jun 2023 – Apr 2024',
    highlights: [
      'Built full-stack Backstage Developer Portal features with React.js and Node.js serving 1,000+ internal developers.',
      'Implemented AWS Secrets Manager integration with EKS via External Secrets Operator across 3+ production deployments.',
    ],
  },
];

function DeveloperProfile() {
  return (
    <section className='px-6 py-12 md:py-16 border-t border-foreground/6'>
      <div className='max-w-3xl mx-auto space-y-12'>
        {/* Header */}
        <div>
          <div className='text-[10px] text-muted-foreground/70 uppercase tracking-[0.3em] mb-8 font-medium'>
            Developer
          </div>
          <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4'>
            <div>
              <h2 className='text-2xl md:text-3xl font-semibold tracking-tight'>
                Prateek Verma
              </h2>
              <p className='text-sm text-muted-foreground mt-1'>
                Software Development Engineer — Full Stack, Cloud-Native &amp;
                Agentic AI
              </p>
            </div>
            <div className='flex flex-wrap gap-2'>
              <a
                href='mailto:prateek.2001.verma@gmail.com'
                className='inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors border border-border rounded-md px-2.5 py-1.5'
              >
                <Mail className='size-3' />
                Email
              </a>
              <a
                href='https://linkedin.com/in/prateek-verma'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors border border-border rounded-md px-2.5 py-1.5'
              >
                <Linkedin className='size-3' />
                LinkedIn
              </a>
              <a
                href='https://github.com/prateek-verma'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors border border-border rounded-md px-2.5 py-1.5'
              >
                <Github className='size-3' />
                GitHub
              </a>
            </div>
          </div>
          <div className='flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground/70'>
            <span className='flex items-center gap-1'>
              <MapPin className='size-3' /> Bangalore, India
            </span>
            <span className='flex items-center gap-1'>
              <Phone className='size-3' /> +91 7877123418
            </span>
            <span className='flex items-center gap-1'>
              <Star className='size-3' /> AWS Certified Cloud Practitioner
            </span>
          </div>
          <p className='mt-4 text-sm text-muted-foreground/80 leading-relaxed max-w-2xl'>
            3+ years building scalable, production-grade full-stack applications
            and cloud-native microservices. Strong expertise in RESTful API
            design, system design, and Agentic AI. Proven track record of
            delivering end-to-end features, optimising system performance, and
            implementing observability in production.
          </p>
        </div>

        {/* Skills */}
        <div>
          <div className='flex items-center gap-2 mb-4'>
            <Code2 className='size-4 text-primary' />
            <h3 className='text-sm font-medium uppercase tracking-wider'>
              Skills
            </h3>
          </div>
          <div className='space-y-2'>
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className='flex flex-wrap gap-x-3 gap-y-1.5 text-xs'
              >
                <span className='text-muted-foreground/60 w-28 shrink-0 pt-0.5'>
                  {category}
                </span>
                <div className='flex flex-wrap gap-1.5'>
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className='bg-muted text-muted-foreground px-2 py-0.5 rounded border border-border/60'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className='flex items-center gap-2 mb-4'>
            <Briefcase className='size-4 text-primary' />
            <h3 className='text-sm font-medium uppercase tracking-wider'>
              Experience
            </h3>
          </div>
          <div className='space-y-6'>
            {experience.map((job) => (
              <div
                key={`${job.company}-${job.role}`}
                className='border-l-2 border-primary/30 pl-4 space-y-2'
              >
                <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5'>
                  <span className='text-sm font-medium'>{job.role}</span>
                  <span className='text-xs text-muted-foreground/70'>
                    {job.period}
                  </span>
                </div>
                <span className='text-xs text-primary/80'>{job.company}</span>
                <ul className='space-y-1.5 mt-2'>
                  {job.highlights.map((h) => (
                    <li
                      key={h}
                      className='text-xs text-muted-foreground/80 leading-relaxed flex gap-2'
                    >
                      <span className='text-primary/50 mt-0.5 shrink-0'>–</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className='min-h-full'>
      <Hero />
      <Features />
      <DeveloperProfile />
      <Footer />
    </div>
  );
}
