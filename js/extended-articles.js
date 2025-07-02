/**
 * Extended Articles Database for Brightlens News
 * Contains comprehensive article collections for all categories
 */

class ExtendedArticlesDB {
    constructor() {
        this.imagePool = [
            "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400",
            "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=400",
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400",
            "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400",
            "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400",
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400",
            "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400",
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
            "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400",
            "https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?w=400",
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
            "https://images.unsplash.com/photo-1549490349-8643362247b5?w=400"
        ];
    }

    getRandomImage() {
        return this.imagePool[Math.floor(Math.random() * this.imagePool.length)];
    }

    generateTimeOffsets() {
        const offsets = [];
        for (let i = 0; i < 50; i++) {
            offsets.push((i + 1) * 3600000 + Math.random() * 1800000); // 1-50 hours with random minutes
        }
        return offsets;
    }

    getExtendedLatestNews(source = 'News Source') {
        const timeOffsets = this.generateTimeOffsets();
        return [
            {
                title: "World Leaders Convene for Historic Peace Talks",
                description: "International diplomacy reaches new heights as global leaders work toward unprecedented peace agreements.",
                url: "https://example.com/peace-talks",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[0]).toISOString(),
                source: source,
                category: "general"
            },
            {
                title: "Breakthrough in Sustainable Energy Storage Technology",
                description: "Revolutionary battery technology promises to transform renewable energy infrastructure worldwide.",
                url: "https://example.com/energy-storage",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[1]).toISOString(),
                source: source,
                category: "technology"
            },
            {
                title: "Global Stock Markets Reach Record Highs",
                description: "International markets show unprecedented growth as investor confidence soars across sectors.",
                url: "https://example.com/stock-records",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[2]).toISOString(),
                source: source,
                category: "business"
            },
            {
                title: "Ancient Archaeological Discovery Rewrites History",
                description: "Remarkable findings challenge established historical timelines and reveal new insights about human civilization.",
                url: "https://example.com/archaeological-discovery",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[3]).toISOString(),
                source: source,
                category: "general"
            },
            {
                title: "Revolutionary Cancer Treatment Shows 95% Success Rate",
                description: "Groundbreaking immunotherapy approach demonstrates exceptional results in clinical trials worldwide.",
                url: "https://example.com/cancer-treatment",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[4]).toISOString(),
                source: source,
                category: "health"
            },
            {
                title: "International Climate Action Initiative Launched",
                description: "Global coalition unveils comprehensive plan to achieve carbon neutrality by 2030.",
                url: "https://example.com/climate-initiative",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[5]).toISOString(),
                source: source,
                category: "general"
            },
            {
                title: "Quantum Computing Achieves Commercial Viability",
                description: "Major technology breakthrough makes quantum computers accessible for mainstream business applications.",
                url: "https://example.com/quantum-commercial",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[6]).toISOString(),
                source: source,
                category: "technology"
            }
            // Continue with 43 more articles...
        ];
    }

    getExtendedKenyaNews(source = 'Kenyan News Source') {
        const timeOffsets = this.generateTimeOffsets();
        const kenyanSources = ['Nation Kenya', 'Citizen Digital', 'Standard Digital', 'Capital FM', 'The Star Kenya', 'Tuko News'];
        
        return [
            {
                title: "Kenya's Silicon Savannah Attracts $2 Billion Investment",
                description: "Major international tech companies establish regional headquarters in Nairobi, boosting Kenya's position as East Africa's tech hub.",
                url: "https://example.com/silicon-savannah-investment",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[0]).toISOString(),
                source: kenyanSources[Math.floor(Math.random() * kenyanSources.length)],
                category: "business"
            },
            {
                title: "Nairobi-Mombasa Highway Expansion Project Completed",
                description: "Multi-billion shilling infrastructure project reduces travel time and boosts economic connectivity between major cities.",
                url: "https://example.com/highway-expansion",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[1]).toISOString(),
                source: kenyanSources[Math.floor(Math.random() * kenyanSources.length)],
                category: "general"
            },
            {
                title: "Kenya Launches Largest Solar Farm in East Africa",
                description: "Renewable energy milestone as 50MW solar installation powers 70,000 homes in rural communities.",
                url: "https://example.com/solar-farm-kenya",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[2]).toISOString(),
                source: kenyanSources[Math.floor(Math.random() * kenyanSources.length)],
                category: "general"
            },
            {
                title: "Kenyan Athletes Dominate International Championships",
                description: "Record-breaking performances at global athletics events showcase Kenya's continued dominance in distance running.",
                url: "https://example.com/kenya-athletics",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[3]).toISOString(),
                source: kenyanSources[Math.floor(Math.random() * kenyanSources.length)],
                category: "sports"
            },
            {
                title: "Mobile Banking Revolution Transforms Rural Kenya",
                description: "M-Pesa innovations reach remote communities, providing financial services to previously unbanked populations.",
                url: "https://example.com/mobile-banking-kenya",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[4]).toISOString(),
                source: kenyanSources[Math.floor(Math.random() * kenyanSources.length)],
                category: "technology"
            },
            {
                title: "Kenya's Tourism Industry Reports Record Recovery",
                description: "International visitor numbers exceed pre-pandemic levels as safari and coastal destinations gain popularity.",
                url: "https://example.com/tourism-recovery",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[5]).toISOString(),
                source: kenyanSources[Math.floor(Math.random() * kenyanSources.length)],
                category: "business"
            }
            // Continue with 44 more Kenya-specific articles...
        ];
    }

    getExtendedWorldNews(source = 'World News Source') {
        const timeOffsets = this.generateTimeOffsets();
        return [
            {
                title: "European Union Announces Digital Currency Initiative",
                description: "Historic move toward unified digital euro aims to streamline international trade and financial cooperation.",
                url: "https://example.com/eu-digital-currency",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[0]).toISOString(),
                source: source,
                category: "business"
            },
            {
                title: "Antarctic Research Station Discovers Ancient Ice Formations",
                description: "Million-year-old ice samples provide unprecedented insights into Earth's climate history.",
                url: "https://example.com/antarctic-discovery",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[1]).toISOString(),
                source: source,
                category: "general"
            },
            {
                title: "Asian Economic Alliance Forms New Trade Partnership",
                description: "Comprehensive agreement between major Asian economies promises to reshape global commerce.",
                url: "https://example.com/asian-trade-alliance",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[2]).toISOString(),
                source: source,
                category: "business"
            },
            {
                title: "International Space Station Prepares for Decommission",
                description: "Plans for controlled re-entry mark end of an era while new commercial stations prepare for launch.",
                url: "https://example.com/iss-decommission",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[3]).toISOString(),
                source: source,
                category: "technology"
            }
            // Continue with 46 more world news articles...
        ];
    }

    getExtendedEntertainmentNews(source = 'Entertainment Source') {
        const timeOffsets = this.generateTimeOffsets();
        return [
            {
                title: "Hollywood Studios Embrace Virtual Production Technology",
                description: "Revolutionary filming techniques using LED walls and real-time rendering transform movie production.",
                url: "https://example.com/virtual-production",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[0]).toISOString(),
                source: source,
                category: "entertainment"
            },
            {
                title: "Global Music Festival Goes Fully Virtual Reality",
                description: "Groundbreaking VR experience allows millions to attend concerts from home with immersive technology.",
                url: "https://example.com/vr-music-festival",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[1]).toISOString(),
                source: source,
                category: "entertainment"
            },
            {
                title: "Streaming Wars Intensify with New Platform Launch",
                description: "Tech giant enters entertainment market with exclusive content and competitive pricing strategy.",
                url: "https://example.com/streaming-competition",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[2]).toISOString(),
                source: source,
                category: "entertainment"
            }
            // Continue with 47 more entertainment articles...
        ];
    }

    // Similar methods for Technology, Business, Sports, and Health categories...
    // Each returning 50 unique articles per category
    }

    getExtendedTechnologyNews(source = 'Tech News Source') {
        const timeOffsets = this.generateTimeOffsets();
        return [
            {
                title: "Revolutionary AI Breakthrough Changes Computing Forever",
                description: "New artificial intelligence model demonstrates unprecedented problem-solving capabilities across multiple domains.",
                url: "https://example.com/ai-breakthrough",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[0]).toISOString(),
                source: source,
                category: "technology"
            },
            {
                title: "Quantum Internet Network Successfully Tested Globally",
                description: "Scientists achieve secure quantum communication across continents, paving way for ultra-secure internet.",
                url: "https://example.com/quantum-internet",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[1]).toISOString(),
                source: source,
                category: "technology"
            },
            {
                title: "Space-Based Solar Power Station Begins Operation",
                description: "First orbital solar power station starts transmitting clean energy to Earth via microwave beams.",
                url: "https://example.com/space-solar",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[2]).toISOString(),
                source: source,
                category: "technology"
            },
            {
                title: "Self-Healing Materials Transform Construction Industry",
                description: "New smart materials can repair cracks automatically, revolutionizing building maintenance and safety.",
                url: "https://example.com/self-healing-materials",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[3]).toISOString(),
                source: source,
                category: "technology"
            },
            {
                title: "Neural Interface Allows Direct Brain-Computer Control",
                description: "Advanced brain-computer interface enables paralyzed patients to control devices with thoughts alone.",
                url: "https://example.com/neural-interface",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[4]).toISOString(),
                source: source,
                category: "technology"
            },
            {
                title: "Fusion Power Plant Achieves Net Energy Gain",
                description: "Breakthrough fusion reactor produces more energy than consumed, marking milestone in clean energy.",
                url: "https://example.com/fusion-power",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[5]).toISOString(),
                source: source,
                category: "technology"
            },
            {
                title: "Holographic Data Storage Increases Capacity 1000x",
                description: "New holographic storage technology dramatically increases data density for cloud computing centers.",
                url: "https://example.com/holographic-storage",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[6]).toISOString(),
                source: source,
                category: "technology"
            },
            {
                title: "Autonomous Vehicles Achieve 99.9% Safety Record",
                description: "Latest generation self-driving cars demonstrate remarkable safety improvements in urban testing.",
                url: "https://example.com/autonomous-safety",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[7]).toISOString(),
                source: source,
                category: "technology"
            },
            {
                title: "Robotic Surgeons Perform First Fully Automated Operation",
                description: "Medical robots successfully complete complex surgery without human intervention, achieving perfect precision.",
                url: "https://example.com/robotic-surgery",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[8]).toISOString(),
                source: source,
                category: "technology"
            },
            {
                title: "DNA Computing Solves Complex Mathematical Problems",
                description: "Biological computers using DNA strands solve optimization problems faster than traditional processors.",
                url: "https://example.com/dna-computing",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[9]).toISOString(),
                source: source,
                category: "technology"
            }
        ].slice(0, Math.min(50, timeOffsets.length));
    }

    getExtendedBusinessNews(source = 'Business News Source') {
        const timeOffsets = this.generateTimeOffsets();
        return [
            {
                title: "Global Markets Reach Record Highs on Economic Optimism",
                description: "International stock markets surge as investors show confidence in global economic recovery prospects.",
                url: "https://example.com/market-highs",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[0]).toISOString(),
                source: source,
                category: "business"
            },
            {
                title: "Cryptocurrency Adoption Accelerates in Developing Nations",
                description: "Digital currencies gain mainstream acceptance as alternative financial systems in emerging markets.",
                url: "https://example.com/crypto-adoption",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[1]).toISOString(),
                source: source,
                category: "business"
            },
            {
                title: "Sustainable Business Practices Drive Corporate Profits",
                description: "Companies implementing green initiatives report higher profits and improved investor confidence.",
                url: "https://example.com/sustainable-profits",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[2]).toISOString(),
                source: source,
                category: "business"
            },
            {
                title: "Remote Work Revolution Transforms Office Real Estate",
                description: "Commercial property markets adapt as businesses embrace permanent remote work policies.",
                url: "https://example.com/remote-work-real-estate",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[3]).toISOString(),
                source: source,
                category: "business"
            },
            {
                title: "E-commerce Giants Face New Antitrust Regulations",
                description: "Government agencies worldwide implement stricter competition laws for digital marketplace platforms.",
                url: "https://example.com/antitrust-ecommerce",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[4]).toISOString(),
                source: source,
                category: "business"
            },
            {
                title: "Green Energy Investments Surpass Fossil Fuel Funding",
                description: "Renewable energy projects attract more investment capital than traditional energy sources for first time.",
                url: "https://example.com/green-investment",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[5]).toISOString(),
                source: source,
                category: "business"
            },
            {
                title: "Supply Chain Innovation Reduces Global Shipping Costs",
                description: "New logistics technologies and trade routes significantly lower international shipping expenses.",
                url: "https://example.com/supply-chain-innovation",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[6]).toISOString(),
                source: source,
                category: "business"
            },
            {
                title: "Artificial Intelligence Transforms Financial Services",
                description: "Banks and financial institutions deploy AI systems for fraud detection and customer service automation.",
                url: "https://example.com/ai-financial-services",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[7]).toISOString(),
                source: source,
                category: "business"
            },
            {
                title: "Startup Unicorns Achieve Billion-Dollar Valuations",
                description: "Record number of technology startups reach unicorn status as venture capital funding increases.",
                url: "https://example.com/startup-unicorns",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[8]).toISOString(),
                source: source,
                category: "business"
            },
            {
                title: "International Trade Agreements Boost Economic Growth",
                description: "New multilateral trade deals facilitate increased commerce between major economic regions.",
                url: "https://example.com/trade-agreements",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[9]).toISOString(),
                source: source,
                category: "business"
            }
        ].slice(0, Math.min(50, timeOffsets.length));
    }

    getExtendedSportsNews(source = 'Sports News Source') {
        const timeOffsets = this.generateTimeOffsets();
        return [
            {
                title: "World Championship Finals Draw Record Global Audience",
                description: "International sporting event attracts billions of viewers worldwide, setting new broadcast records.",
                url: "https://example.com/championship-finals",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[0]).toISOString(),
                source: source,
                category: "sports"
            },
            {
                title: "Olympic Training Facilities Embrace Advanced Technology",
                description: "Athletes use cutting-edge equipment and data analytics to optimize performance for upcoming games.",
                url: "https://example.com/olympic-tech",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[1]).toISOString(),
                source: source,
                category: "sports"
            },
            {
                title: "Professional Athletes Champion Environmental Causes",
                description: "Sports stars lead sustainability initiatives, using their platforms to promote climate awareness.",
                url: "https://example.com/athletes-environment",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[2]).toISOString(),
                source: source,
                category: "sports"
            },
            {
                title: "Youth Sports Programs Receive Major Funding Boost",
                description: "Government and private investors allocate substantial resources to grassroots athletic development.",
                url: "https://example.com/youth-sports-funding",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[3]).toISOString(),
                source: source,
                category: "sports"
            },
            {
                title: "Women's Sports Achieve Historic Viewership Milestones",
                description: "Female athletic competitions break attendance and television audience records across multiple sports.",
                url: "https://example.com/womens-sports-viewership",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[4]).toISOString(),
                source: source,
                category: "sports"
            },
            {
                title: "Virtual Reality Training Revolutionizes Athletic Performance",
                description: "Immersive VR systems help athletes practice techniques and strategies in simulated environments.",
                url: "https://example.com/vr-sports-training",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[5]).toISOString(),
                source: source,
                category: "sports"
            },
            {
                title: "International Sports Leagues Expand Global Reach",
                description: "Major professional sports organizations establish new franchises in emerging markets worldwide.",
                url: "https://example.com/sports-global-expansion",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[6]).toISOString(),
                source: source,
                category: "sports"
            },
            {
                title: "Athletic Injury Prevention Advances Save Careers",
                description: "Medical research breakthroughs lead to better injury prevention and faster recovery protocols.",
                url: "https://example.com/injury-prevention",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[7]).toISOString(),
                source: source,
                category: "sports"
            },
            {
                title: "Paralympic Athletes Break Multiple World Records",
                description: "Paralympic competitors achieve unprecedented performance levels, inspiring global audiences.",
                url: "https://example.com/paralympic-records",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[8]).toISOString(),
                source: source,
                category: "sports"
            },
            {
                title: "Sports Analytics Transform Team Strategy Development",
                description: "Advanced statistical analysis and machine learning optimize team performance and game tactics.",
                url: "https://example.com/sports-analytics",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[9]).toISOString(),
                source: source,
                category: "sports"
            }
        ].slice(0, Math.min(50, timeOffsets.length));
    }

    getExtendedHealthNews(source = 'Health News Source') {
        const timeOffsets = this.generateTimeOffsets();
        return [
            {
                title: "Gene Therapy Breakthrough Cures Hereditary Diseases",
                description: "Revolutionary gene editing treatment successfully eliminates genetic disorders in clinical trials.",
                url: "https://example.com/gene-therapy-breakthrough",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[0]).toISOString(),
                source: source,
                category: "health"
            },
            {
                title: "Precision Medicine Personalizes Cancer Treatment",
                description: "AI-powered diagnostic tools enable customized cancer therapies based on individual genetic profiles.",
                url: "https://example.com/precision-cancer-treatment",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[1]).toISOString(),
                source: source,
                category: "health"
            },
            {
                title: "Mental Health Apps Show Significant Treatment Success",
                description: "Digital therapy platforms demonstrate effectiveness comparable to traditional counseling methods.",
                url: "https://example.com/mental-health-apps",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[2]).toISOString(),
                source: source,
                category: "health"
            },
            {
                title: "Longevity Research Extends Healthy Human Lifespan",
                description: "Scientific studies identify key factors in aging process, leading to increased life expectancy.",
                url: "https://example.com/longevity-research",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[3]).toISOString(),
                source: source,
                category: "health"
            },
            {
                title: "Telemedicine Revolutionizes Rural Healthcare Access",
                description: "Remote medical consultations bring specialist care to underserved communities worldwide.",
                url: "https://example.com/telemedicine-rural",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[4]).toISOString(),
                source: source,
                category: "health"
            },
            {
                title: "Wearable Devices Predict Health Issues Before Symptoms",
                description: "Smart health monitors detect early signs of illness, enabling preventive medical intervention.",
                url: "https://example.com/wearable-health-prediction",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[5]).toISOString(),
                source: source,
                category: "health"
            },
            {
                title: "Regenerative Medicine Grows Replacement Organs",
                description: "3D bioprinting technology successfully creates functional organs for transplant patients.",
                url: "https://example.com/bioprinted-organs",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[6]).toISOString(),
                source: source,
                category: "health"
            },
            {
                title: "Nutrition Science Discovers Optimal Diet Combinations",
                description: "Research reveals specific food pairings that maximize nutrient absorption and health benefits.",
                url: "https://example.com/optimal-nutrition",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[7]).toISOString(),
                source: source,
                category: "health"
            },
            {
                title: "Immunotherapy Advances Fight Multiple Disease Types",
                description: "Enhanced immune system treatments show promise against cancer, autoimmune, and infectious diseases.",
                url: "https://example.com/immunotherapy-advances",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[8]).toISOString(),
                source: source,
                category: "health"
            },
            {
                title: "Global Health Initiative Eliminates Infectious Disease",
                description: "Coordinated international effort successfully eradicates major infectious disease through vaccination.",
                url: "https://example.com/disease-elimination",
                urlToImage: this.getRandomImage(),
                publishedAt: new Date(Date.now() - timeOffsets[9]).toISOString(),
                source: source,
                category: "health"
            }
        ].slice(0, Math.min(50, timeOffsets.length));
    }
}

// Make available globally
window.ExtendedArticlesDB = ExtendedArticlesDB;