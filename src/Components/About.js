import React from 'react';
import { Container, Col, Row, Card, Badge } from 'react-bootstrap';

function About() {

    const strengths = [
        'AWS architecture',
        'CI/CD acceleration',
        'Infrastructure as code',
        'Observability and insights',
        'Automation'
    ];

    const experience = [
        {
            company: 'DataWorks Group',
            location: 'Sydney · DevOps Engineer',
            period: 'May 2025 – Present',
            highlights: [
                'Evolve Terraform blueprints so production stacks stay clean, secure, and repeatable.',
                'Rebuilt Lambda services in Python with clearer structure, tighter tests, and quicker cold starts.',
                'Automated build, test, and release gates through CodeBuild and CodePipeline to shorten delivery loops.',
                'Streamlined log intelligence by piping CloudWatch events into OpenSearch dashboards for live visibility.',
                'Scripted CloudFront invalidation workflows that removed manual toil across teams.'
            ]
        },
        {
            company: 'Pronto Software',
            location: 'Sydney · DevOps Engineer',
            period: 'Jul 2024 – May 2025',
            highlights: [
                'Introduced GitLab CI pipelines that standardised testing and deployments across squads.',
                'Assimilated Python in weeks to extend core services and refresh internal libraries.',
                'Rescued stalled delivery workstreams by clarifying requirements and shipping them to production.'
            ]
        },
        {
            company: 'Coral Active',
            location: 'Sydney · DevOps Engineer',
            period: 'Aug 2021 – Jul 2024',
            highlights: [
                'Defined Jenkins pipelines as code, unifying promotion workflows for product teams.',
                'Provisioned Kubernetes on AWS with Terraform and Helm kits for reusable service deployments.',
                'Implemented CloudWatch dashboards and log analysis habits that sped up incident response.',
                'Partnered with stakeholders to shape cost-aware architectures and clear rollout plans.'
            ]
        },
        {
            company: 'DX Solutions',
            location: 'Sydney · Quality Engineer',
            period: 'Feb 2021 – Aug 2021',
            highlights: [
                'Built Selenium suites for UI and PDF validation, raising regression confidence.',
                'Embedded testing practices early in agile ceremonies using Jira and peer reviews.'
            ]
        },
        {
            company: 'Passingdoor',
            location: 'Sydney · Frontend Developer (Intern)',
            period: 'Nov 2020 – Feb 2021',
            highlights: [
                'Delivered React-based marketing pages with polished CSS-in-JS styling and API wiring.'
            ]
        },
        {
            company: 'Medical Imaging',
            location: 'Australia · Nuclear Medicine Technologist',
            period: 'Jan 2014 – Feb 2021',
            highlights: [
                'Led imaging shifts, mentored technologists, and upheld patient-first service under strict deadlines.'
            ]
        }
    ];

    const toolset = [
        'AWS',
        'Terraform',
        'CloudFormation',
        'Docker',
        'Kubernetes',
        'Helm',
        'Python',
        'Node.js',
        'GitLab CI',
        'Jenkins',
        'CodeBuild',
        'CodePipeline',
        'OpenSearch',
        'CloudWatch',
        'Linux',
        'Bash'
    ];

    return (
        <div className='aboutSection'>
            <Container className='aboutContainer'>
                <Row className='aboutIntroRow'>
                    <Col md={8} className='aboutCol'>
                        <Card className='aboutPanel'>
                            <Card.Body>
                                <span className='aboutEyebrow'>Profile Snapshot</span>
                                <h4 className='aboutHeadline'>Focus on automated and reliable delivery</h4>
                                <p className='aboutParagraph'>
                                    I pair AWS certifications with deep automation experience to streamline how teams ship software. I design cloud-native foundations, build CI/CD flows with CodeBuild, CodePipeline, GitLab CI, and Jenkins, and tune Docker + Kubernetes stacks so they scale without losing stability. I codify infrastructure through Terraform and CloudFormation, shape architectures for security and resilience, and keep serverless workloads tidy with well-tested Python. Whether I am debugging in Linux terminals or coaching product teams through release rituals, I look for ways to remove manual effort, surface the right telemetry, and guide projects smoothly into production.
                                </p>
                                <div className='aboutStrengths'>
                                    {strengths.map((item) => (
                                        <span key={item} className='strengthPill'>{item}</span>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className='aboutCol'>
                        <Card className='aboutPanel aboutAccent'>
                            <Card.Body>
                                <h5 className='aboutSectionTitle'>Certifications</h5>
                                <div className='aboutCerts'>
                                    <img className='aws-badges' src='img/aws-certified-devops-engineer-professional.png' alt='AWS Certified DevOps Engineer Professional badge' />
                                    <img className='aws-badges' src='img/aws-certified-solutions-architect-associate.png' alt='AWS Certified Solutions Architect Associate badge' />
                                    <img className='aws-badges' src='img/aws-certified-cloud-practitioner.png' alt='AWS Certified Cloud Practitioner badge' />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className='aboutRow'>
                    <Col className='aboutCol'>
                        <Card className='aboutPanel'>
                            <Card.Body>
                                <h3 className='aboutSectionTitle'>Recent Experience</h3>
                                <div className='experienceTimeline'>
                                    {experience.map((role) => (
                                        <div key={role.company} className='experienceItem'>
                                            <div className='experienceMeta'>
                                                <h4>{role.company}</h4>
                                                <span>{role.location}</span>
                                                <span className='experiencePeriod'>{role.period}</span>
                                            </div>
                                            <ul className='experienceHighlights'>
                                                {role.highlights.map((point) => (
                                                    <li key={point}>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className='aboutRow'>
                    <Col className='aboutCol'>
                        <Card className='aboutPanel'>
                            <Card.Body>
                                <h3 className='aboutSectionTitle'>Toolbox</h3>
                                <div className='toolTags'>
                                    {toolset.map((tool) => (
                                        <Badge key={tool} bg='secondary' className='toolBadge'>{tool}</Badge>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default About;
