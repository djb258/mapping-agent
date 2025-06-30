# Insurance Enrollment Mapping Agent

A comprehensive Next.js application for processing insurance enrollment data with AI-powered mapping, validation, and vendor-specific output generation.

## 🚀 Features

### Phase 1: Data Intake & Template Building

- Upload CSV/XLSX files
- AI-powered column analysis and description generation
- Create editable mapping templates
- Export in multiple formats (CSV/XLSX)

### Phase 2: Template & Master File Mapping

- Auto-map columns between template and master files
- Manual override capabilities
- Validation rules enforcement
- Error handling and reporting

### Phase 3: Enrollment Processing & Neon Integration

- Data validation and transformation
- Error processing with invalid row handling
- Vendor-specific output generation
- Neon SQL blueprint generation
- Direct database integration

### Phase 4: Blueprint Management

- Reusable mapping templates
- Template library with categories
- Instance management for clients/vendors
- Import/export functionality
- Version control

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **File Processing**: XLSX, PapaParse
- **Database**: Neon (PostgreSQL)
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd mapping-agent
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
mapping-agent/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Landing page
│   ├── phase1/            # Data intake & template building
│   ├── phase2/            # Template & master file mapping
│   ├── phase3/            # Enrollment processing & Neon integration
│   └── phase4/            # Blueprint management
├── lib/                   # Core business logic
│   ├── types.ts           # TypeScript type definitions
│   ├── utils.ts           # Utility functions
│   ├── enrollment-processor.ts  # Enrollment data processing
│   └── blueprint-manager.ts     # Blueprint management
├── tools/                 # Build and validation tools
│   └── validation/
│       └── doctrine-validator.js  # Barton Doctrine validator
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── next.config.js         # Next.js configuration
├── vercel.json            # Vercel deployment configuration
└── README.md              # Project documentation
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Neon Database
DATABASE_URL=your_neon_database_url

# Optional: AI Service for column analysis
AI_SERVICE_KEY=your_ai_service_key
```

### Barton Doctrine Compliance

This project enforces the Barton Doctrine for code quality and consistency. The doctrine validator runs automatically before builds and deployments.

## 🚀 Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on push to main branch

### Manual Deployment

```bash
npm run build
npm start
```

## 📊 Usage

### Phase 1: Data Intake

1. Navigate to Phase 1
2. Upload your client data file (CSV/XLSX)
3. Review AI-generated column descriptions
4. Create and customize mapping templates
5. Export templates for use in Phase 2

### Phase 2: Mapping

1. Upload your template file from Phase 1
2. Upload your master enrollment file
3. Review auto-generated column mappings
4. Make manual adjustments as needed
5. Validate mappings and export results

### Phase 3: Processing

1. Upload your master enrollment file
2. Process data through validation rules
3. Generate vendor-specific outputs
4. Create Neon SQL blueprints
5. Export processed data

### Phase 4: Blueprint Management

1. Create reusable mapping templates
2. Organize templates by category
3. Create instances for specific clients/vendors
4. Import/export templates for sharing
5. Manage template versions

## 🔍 Validation Rules

The application includes comprehensive validation for:

- Required field validation
- Date format validation (YYYY-MM-DD)
- Data type validation
- Business rule validation
- Vendor-specific requirements

## 🛡️ Error Handling

- Invalid rows are automatically separated into error files
- Detailed error reporting with row-level information
- Graceful handling of file format issues
- Validation feedback with actionable suggestions

## 🔄 Vendor Integration

Support for multiple vendor output formats:

- CSV export with vendor-specific formatting
- Excel export with multiple sheets
- Custom field transformations
- Vendor-specific validation rules

## 📈 Performance

- Client-side file processing for immediate feedback
- Efficient data transformation algorithms
- Optimized rendering with React best practices
- Minimal bundle size with tree shaking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and validation
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:

- Check the documentation
- Review the code examples
- Open an issue on GitHub
- Contact the development team

## 🔮 Roadmap

- [ ] Real-time collaboration features
- [ ] Advanced AI column analysis
- [ ] Multi-language support
- [ ] Advanced reporting and analytics
- [ ] API endpoints for external integration
- [ ] Mobile application
- [ ] Advanced workflow automation
