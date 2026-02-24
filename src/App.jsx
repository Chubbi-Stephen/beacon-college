import { useState } from "react";

function App() {
	const [currentPage, setCurrentPage] = useState("home");

	const renderPage = () => {
		switch (currentPage) {
			case "home":
				return <HomePage />;
			case "about":
				return <AboutPage />;
			case "schools":
				return <SchoolsPage />;
			case "research":
				return <ResearchPage />;
			case "admissions":
				return <AdmissionsPage />;
			case "student-life":
				return <StudentLifePage />;
			case "news":
				return <NewsPage />;
			case "contact":
				return <ContactPage />;
			default:
				return <HomePage />;
		}
	};

	return (
		<div className="min-h-screen bg-white">
			<Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
			<main>{renderPage()}</main>
			<Footer />
			<Chatbot />
		</div>
	);
}

// Header Component
const Header = ({ currentPage, setCurrentPage }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navigation = [
		{ name: "Home", id: "home" },
		{ name: "About", id: "about" },
		{ name: "Schools", id: "schools" },
		{ name: "Research", id: "research" },
		{ name: "Admissions", id: "admissions" },
		{ name: "Student Life", id: "student-life" },
		{ name: "News", id: "news" },
		{ name: "Contact", id: "contact" },
	];

	return (
		<header className="bg-white shadow-lg sticky top-0 z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center py-4">
					{/* Logo */}
					<div
						className="flex items-center space-x-3 cursor-pointer"
						onClick={() => setCurrentPage("home")}
					>
						<div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-lg flex items-center justify-center">
							<span className="text-white font-bold text-xl">B</span>
						</div>
						<div>
							<h1 className="text-xl font-bold text-gray-900">
								Beacon University
							</h1>
							<p className="text-sm text-gray-600">
								Health • Science • Technology
							</p>
						</div>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex items-center space-x-5">
						{navigation.map((item) => (
							<button
								key={item.id}
								onClick={() => setCurrentPage(item.id)}
								className={`font-medium transition-colors duration-200 ${
									currentPage === item.id
										? "text-blue-600"
										: "text-gray-700 hover:text-blue-600"
								}`}
							>
								{item.name}
							</button>
						))}
					</nav>

					{/* CTA Buttons */}
					<div className="hidden lg:flex items-center space-x-4">
						<button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium py-1 px-3 rounded-lg transition-all duration-200">
							Apply Now
						</button>
						<button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-3 rounded-lg transition-colors duration-200">
							Student Portal
						</button>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? "✕" : "☰"}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="lg:hidden py-4 border-t border-gray-200">
						<nav className="space-y-2">
							{navigation.map((item) => (
								<button
									key={item.id}
									onClick={() => {
										setCurrentPage(item.id);
										setIsMenuOpen(false);
									}}
									className={`block w-full text-left py-2 px-4 rounded-md font-medium transition-colors duration-200 ${
										currentPage === item.id
											? "text-blue-600 bg-blue-50"
											: "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
									}`}
								>
									{item.name}
								</button>
							))}
						</nav>
					</div>
				)}
			</div>
		</header>
	);
};

// HomePage Component
const HomePage = () => (
	<div>
		{/* Hero Section */}
		<section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div>
						<h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
							Advancing
							<span className="block text-green-300">Health, Science</span>
							<span className="block">& Technology</span>
						</h1>
						<p className="text-xl text-blue-100 mb-8 leading-relaxed">
							Join a world-class institution where innovation meets excellence.
							Shape the future through groundbreaking research, exceptional
							education, and global impact.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
								Apply Now →
							</button>
							<button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-3 px-6 rounded-lg transition-all duration-200">
								Explore Programs
							</button>
						</div>
					</div>
					<div className="relative">
						<div className="bg-gradient-to-br from-green-400 to-blue-300 rounded-2xl h-96 flex items-center justify-center">
							<span className="text-white text-6xl">🎓</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		{/* Stats Section */}
		<section className="py-16 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
					{[
						{ number: "15,000+", label: "Students", icon: "👥" },
						{ number: "500+", label: "Faculty", icon: "🏆" },
						{ number: "50+", label: "Countries", icon: "🌍" },
						{ number: "200+", label: "Programs", icon: "📚" },
					].map((stat, index) => (
						<div key={index} className="text-center">
							<div className="text-4xl mb-4">{stat.icon}</div>
							<div className="text-3xl font-bold text-gray-900 mb-2">
								{stat.number}
							</div>
							<div className="text-gray-600">{stat.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>

		{/* Schools Section */}
		<section className="py-24 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<p className="text-blue-600 font-medium text-sm uppercase tracking-wide mb-2">
						Academic Excellence
					</p>
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Our Schools & Departments
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Discover world-class education across three premier schools, each
						dedicated to advancing knowledge and preparing future leaders.
					</p>
				</div>
				<div className="grid md:grid-cols-3 gap-8">
					{[
						{
							name: "Health Sciences",
							description:
								"Leading medical education and healthcare innovation",
							icon: "❤️",
							programs: ["Medicine", "Nursing", "Public Health", "Pharmacy"],
						},
						{
							name: "Technology & Engineering",
							description: "Cutting-edge technology and engineering solutions",
							icon: "💻",
							programs: [
								"Computer Science",
								"Engineering",
								"AI & Robotics",
								"Cybersecurity",
							],
						},
						{
							name: "Natural & Applied Sciences",
							description: "Advancing scientific knowledge and discovery",
							icon: "⚛️",
							programs: [
								"Biology",
								"Chemistry",
								"Physics",
								"Environmental Science",
							],
						},
					].map((school, index) => (
						<div
							key={index}
							className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 p-6 text-center"
						>
							<div className="text-6xl mb-6">{school.icon}</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								{school.name}
							</h3>
							<p className="text-gray-600 mb-6">{school.description}</p>
							<div className="flex flex-wrap gap-2 justify-center mb-6">
								{school.programs.map((program, idx) => (
									<span
										key={idx}
										className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
									>
										{program}
									</span>
								))}
							</div>
							<button className="text-blue-600 hover:text-blue-700 font-medium">
								Learn More →
							</button>
						</div>
					))}
				</div>
			</div>
		</section>

		{/* CTA Section */}
		<section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h2 className="text-4xl font-bold mb-6">Ready to Shape the Future?</h2>
				<p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
					Join our community of innovators, researchers, and leaders. Take the
					first step towards an extraordinary education.
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
						Apply for Admission
					</button>
					<button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-medium py-3 px-6 rounded-lg transition-all duration-200">
						Schedule a Visit
					</button>
					<button className="text-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg transition-colors duration-200">
						Partner with Us
					</button>
				</div>
			</div>
		</section>
	</div>
);

// Enhanced About Page Component
const AboutPage = () => (
	<div>
		{/* About Header */}
		<section className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<p className="text-blue-600 font-medium text-sm uppercase tracking-wide mb-2">
						About Beacon University
					</p>
					<h1 className="text-4xl font-bold text-gray-900 mb-4">
						Pioneering Excellence in Education
					</h1>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						For over 75 years, Beacon University has been at the forefront of
						higher education, combining academic excellence with groundbreaking
						research and innovation.
					</p>
				</div>

				{/* Mission, Vision, Values */}
				<div className="grid lg:grid-cols-3 gap-8 mb-16">
					<div className="text-center">
						<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
							<span className="text-3xl">🎯</span>
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-4">
							Our Mission
						</h3>
						<p className="text-gray-600">
							To advance knowledge through innovative research, provide
							transformative education, and prepare leaders who will address the
							world's most pressing challenges in health, science, and
							technology.
						</p>
					</div>

					<div className="text-center">
						<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
							<span className="text-3xl">🔭</span>
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-4">
							Our Vision
						</h3>
						<p className="text-gray-600">
							To be the world's leading institution for interdisciplinary
							education and research, fostering innovation that improves lives
							and creates a sustainable future for all.
						</p>
					</div>

					<div className="text-center">
						<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
							<span className="text-3xl">⭐</span>
						</div>
						<h3 className="text-xl font-semibold text-gray-900 mb-4">
							Our Values
						</h3>
						<p className="text-gray-600">
							Excellence, Innovation, Integrity, Diversity, Collaboration, and
							Social Responsibility guide everything we do as we work to make a
							positive impact on society.
						</p>
					</div>
				</div>

				{/* History Timeline */}
				<div className="mb-16">
					<h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
						Our Journey
					</h3>
					<div className="relative">
						{/* Timeline Line */}
						<div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

						{/* Timeline Items */}
						<div className="space-y-12">
							{[
								{
									year: "1949",
									title: "Foundation",
									description:
										"Beacon University was established with a vision to create a world-class institution dedicated to advancing knowledge in health, science, and technology.",
									color: "blue",
									side: "left",
								},
								{
									year: "1975",
									title: "First Major Breakthrough",
									description:
										"Our researchers achieved their first major breakthrough in cancer immunotherapy, establishing our reputation as a leading research institution.",
									color: "green",
									side: "right",
								},
								{
									year: "1995",
									title: "Global Recognition",
									description:
										"Beacon University gained international recognition, ranking among the top 25 universities worldwide for biomedical research.",
									color: "purple",
									side: "left",
								},
								{
									year: "Present",
									title: "Innovation Continues",
									description:
										"Today, we continue to push boundaries with cutting-edge research facilities, innovative programs, and partnerships with leading institutions worldwide.",
									color: "red",
									side: "right",
								},
							].map((item, index) => (
								<div key={index} className="relative flex items-center">
									{item.side === "left" ? (
										<>
											<div className="flex-1 pr-8 text-right">
												<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
													<h4 className="text-lg font-semibold text-gray-900 mb-2">
														{item.year} - {item.title}
													</h4>
													<p className="text-gray-600">{item.description}</p>
												</div>
											</div>
											<div
												className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${item.color}-600 rounded-full border-4 border-white`}
											></div>
											<div className="flex-1 pl-8"></div>
										</>
									) : (
										<>
											<div className="flex-1 pr-8"></div>
											<div
												className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-${item.color}-600 rounded-full border-4 border-white`}
											></div>
											<div className="flex-1 pl-8">
												<div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
													<h4 className="text-lg font-semibold text-gray-900 mb-2">
														{item.year} - {item.title}
													</h4>
													<p className="text-gray-600">{item.description}</p>
												</div>
											</div>
										</>
									)}
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Leadership Team */}
				<div className="mb-16">
					<h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
						Leadership Team
					</h3>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								name: "Dr. Sarah Chen",
								title: "President & Chancellor",
								bio: "Renowned educator and researcher - Leading the university with 20 years of experience in higher education.",
								emoji: "👨‍🎓",
								gradient: "from-blue-400 to-blue-600",
							},
							{
								name: "Dr. Michael Rodriguez",
								title: "Provost & VP Academic Affairs",
								bio: "Former NIH researcher - Overseeing academic excellence and research initiatives across all schools.",
								emoji: "👩‍🔬",
								gradient: "from-green-400 to-green-600",
							},
							{
								name: "Dr. Jennifer Park",
								title: "Dean of Health Sciences",
								bio: "Award-winning physician-scientist - Leading innovation in precision medicine with groundbreaking research and programs.",
								emoji: "👨‍💼",
								gradient: "from-purple-400 to-purple-600",
							},
							{
								name: "Dr. David Thompson",
								title: "VP Student Affairs",
								bio: "Student advocacy expert - Ensuring exceptional student experience and support services across campus.",
								emoji: "👩‍💼",
								gradient: "from-red-400 to-red-600",
							},
						].map((leader, index) => (
							<div
								key={index}
								className="text-center hover:transform hover:scale-105 transition-transform duration-300"
							>
								<div
									className={`w-32 h-32 bg-gradient-to-br ${leader.gradient} rounded-full mx-auto mb-4 flex items-center justify-center`}
								>
									<span className="text-white text-4xl">{leader.emoji}</span>
								</div>
								<h4 className="text-lg font-semibold text-gray-900 mb-1">
									{leader.name}
								</h4>
								<p className="text-blue-600 font-medium mb-2">{leader.title}</p>
								<p className="text-sm text-gray-600">{leader.bio}</p>
							</div>
						))}
					</div>
				</div>

				{/* Campus Facts */}
				<div className="bg-gray-50 rounded-2xl p-8">
					<h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
						Campus at a Glance
					</h3>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{[
							{ number: "500", label: "Acres of Campus", color: "blue" },
							{ number: "45", label: "Academic Buildings", color: "green" },
							{ number: "15", label: "Research Centers", color: "purple" },
							{ number: "2.5M", label: "Library Volumes", color: "red" },
						].map((fact, index) => (
							<div key={index} className="text-center">
								<div
									className={`text-3xl font-bold text-${fact.color}-600 mb-2`}
								>
									{fact.number}
								</div>
								<div className="text-gray-600 text-sm">{fact.label}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	</div>
);

const SchoolsPage = () => (
	<div>
		{/* Schools Header */}
		<section className="py-24 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<p className="text-blue-600 font-medium text-sm uppercase tracking-wide mb-2">
						Academic Excellence
					</p>
					<h1 className="text-4xl font-bold text-gray-900 mb-4">
						Our Schools & Departments
					</h1>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Discover world-class education across three premier schools, each
						dedicated to advancing knowledge and preparing future leaders.
					</p>
				</div>

				{/* Schools Grid */}
				<div className="grid md:grid-cols-3 gap-8">
					{[
						{
							name: "Health Sciences",
							description:
								"Leading medical education and healthcare innovation",
							icon: "❤️",
							programs: ["Medicine", "Nursing", "Public Health", "Pharmacy"],
							students: "5,000+",
							faculty: "200+",
							research: "$50M+ funding",
						},
						{
							name: "Technology & Engineering",
							description: "Cutting-edge technology and engineering solutions",
							icon: "💻",
							programs: [
								"Computer Science",
								"Engineering",
								"AI & Robotics",
								"Cybersecurity",
							],
							students: "6,000+",
							faculty: "180+",
							research: "$75M+ funding",
						},
						{
							name: "Natural & Applied Sciences",
							description: "Advancing scientific knowledge and discovery",
							icon: "⚛️",
							programs: [
								"Biology",
								"Chemistry",
								"Physics",
								"Environmental Science",
							],
							students: "4,000+",
							faculty: "120+",
							research: "$60M+ funding",
						},
					].map((school, index) => (
						<div
							key={index}
							className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 text-center group hover:transform hover:scale-105"
						>
							<div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
								<span className="text-4xl group-hover:text-white transition-colors duration-300">
									{school.icon}
								</span>
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								{school.name}
							</h3>
							<p className="text-gray-600 mb-6">{school.description}</p>

							{/* Programs */}
							<div className="flex flex-wrap gap-2 justify-center mb-6">
								{school.programs.map((program, idx) => (
									<span
										key={idx}
										className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
									>
										{program}
									</span>
								))}
							</div>

							{/* Stats */}
							<div className="grid grid-cols-3 gap-4 mb-6 text-sm">
								<div>
									<div className="font-semibold text-blue-600">
										{school.students}
									</div>
									<div className="text-gray-500">Students</div>
								</div>
								<div>
									<div className="font-semibold text-green-600">
										{school.faculty}
									</div>
									<div className="text-gray-500">Faculty</div>
								</div>
								<div>
									<div className="font-semibold text-purple-600">
										{school.research}
									</div>
									<div className="text-gray-500">Research</div>
								</div>
							</div>

							<button className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
								Learn More →
							</button>
						</div>
					))}
				</div>
			</div>
		</section>

		{/* Degree Programs */}
		<section className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						Degree Programs
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						From undergraduate to doctoral programs, we offer comprehensive
						education pathways.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{[
						{
							level: "Undergraduate",
							icon: "🎓",
							description: "Bachelor's degree programs with hands-on learning",
							programs: [
								"Bachelor of Science",
								"Bachelor of Arts",
								"Bachelor of Engineering",
							],
							duration: "4 years",
						},
						{
							level: "Graduate",
							icon: "📚",
							description:
								"Advanced master's programs for specialized expertise",
							programs: [
								"Master of Science",
								"Master of Arts",
								"Master of Engineering",
							],
							duration: "2 years",
						},
						{
							level: "Doctoral",
							icon: "🔬",
							description: "PhD programs for research and academic careers",
							programs: [
								"Doctor of Philosophy",
								"Doctor of Medicine",
								"Doctor of Engineering",
							],
							duration: "4-6 years",
						},
					].map((program, index) => (
						<div
							key={index}
							className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
						>
							<div className="text-4xl mb-4">{program.icon}</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">
								{program.level}
							</h3>
							<p className="text-gray-600 mb-4">{program.description}</p>
							<div className="space-y-2 mb-4">
								{program.programs.map((prog, idx) => (
									<div key={idx} className="text-sm text-gray-500">
										{prog}
									</div>
								))}
							</div>
							<div className="text-blue-600 font-medium">
								{program.duration}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	</div>
);

const ResearchPage = () => (
	<div>
		{/* Research Hero */}
		<section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h1 className="text-5xl font-bold mb-6">Research & Innovation</h1>
					<p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
						Groundbreaking research that addresses global challenges and
						advances human knowledge through cutting-edge facilities and
						world-class faculty.
					</p>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
						{[
							{ number: "$200M+", label: "Annual Research Funding" },
							{ number: "15", label: "Research Centers" },
							{ number: "500+", label: "Active Projects" },
							{ number: "1,200+", label: "Publications/Year" },
						].map((stat, index) => (
							<div key={index} className="text-center">
								<div className="text-3xl font-bold text-green-300 mb-2">
									{stat.number}
								</div>
								<div className="text-blue-100 text-sm">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>

		{/* Research Areas */}
		<section className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						Research Areas
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Our research spans multiple disciplines, addressing the most
						pressing challenges of our time.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						{
							title: "Cancer Research",
							icon: "🧬",
							description:
								"Pioneering immunotherapy and precision medicine approaches",
							funding: "$45M",
							projects: "25 active studies",
							highlight: "Phase III clinical trials",
						},
						{
							title: "Artificial Intelligence",
							icon: "🤖",
							description:
								"Machine learning, robotics, and ethical AI development",
							funding: "$38M",
							projects: "40 active projects",
							highlight: "AI Ethics Institute",
						},
						{
							title: "Climate Science",
							icon: "🌍",
							description:
								"Environmental sustainability and climate change solutions",
							funding: "$32M",
							projects: "18 active studies",
							highlight: "Carbon capture technology",
						},
						{
							title: "Neuroscience",
							icon: "🧠",
							description:
								"Brain research and neurological disorder treatments",
							funding: "$28M",
							projects: "22 active studies",
							highlight: "Alzheimer's breakthrough",
						},
						{
							title: "Renewable Energy",
							icon: "⚡",
							description: "Solar, wind, and next-generation energy storage",
							funding: "$35M",
							projects: "15 active projects",
							highlight: "Quantum battery research",
						},
						{
							title: "Biotechnology",
							icon: "🔬",
							description:
								"Gene therapy, synthetic biology, and drug discovery",
							funding: "$42M",
							projects: "30 active studies",
							highlight: "CRISPR applications",
						},
					].map((area, index) => (
						<div
							key={index}
							className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 hover:transform hover:scale-105"
						>
							<div className="text-4xl mb-4">{area.icon}</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">
								{area.title}
							</h3>
							<p className="text-gray-600 mb-4">{area.description}</p>
							<div className="space-y-2 text-sm">
								<div className="flex justify-between">
									<span className="text-gray-500">Funding:</span>
									<span className="font-semibold text-blue-600">
										{area.funding}
									</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-500">Projects:</span>
									<span className="font-semibold text-green-600">
										{area.projects}
									</span>
								</div>
								<div className="mt-3 p-2 bg-yellow-50 rounded-lg">
									<span className="text-yellow-800 text-xs font-medium">
										🌟 {area.highlight}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>

		{/* Research Centers */}
		<section className="py-24 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						Research Centers & Institutes
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						State-of-the-art facilities equipped with cutting-edge technology
						and equipment.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					{[
						{
							name: "Institute for Advanced Computing",
							description:
								"Quantum computing, high-performance computing, and AI research",
							facilities: [
								"Quantum Lab",
								"Supercomputing Center",
								"AI Development Lab",
							],
							director: "Dr. Sarah Chen",
							established: "2018",
						},
						{
							name: "Center for Precision Medicine",
							description:
								"Personalized healthcare through genomics and data science",
							facilities: ["Genomics Lab", "Biobank", "Clinical Research Unit"],
							director: "Dr. Michael Rodriguez",
							established: "2015",
						},
						{
							name: "Environmental Research Institute",
							description:
								"Climate change research and environmental sustainability",
							facilities: [
								"Climate Simulation Lab",
								"Field Research Station",
								"Green Chemistry Lab",
							],
							director: "Dr. Jennifer Park",
							established: "2012",
						},
						{
							name: "Innovation Hub",
							description: "Technology transfer and startup incubation",
							facilities: [
								"Maker Space",
								"Prototype Lab",
								"Business Incubator",
							],
							director: "Dr. David Thompson",
							established: "2020",
						},
					].map((center, index) => (
						<div
							key={index}
							className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
						>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">
								{center.name}
							</h3>
							<p className="text-gray-600 mb-4">{center.description}</p>
							<div className="space-y-3">
								<div>
									<h4 className="font-medium text-gray-900 mb-2">
										Key Facilities:
									</h4>
									<div className="flex flex-wrap gap-2">
										{center.facilities.map((facility, idx) => (
											<span
												key={idx}
												className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
											>
												{facility}
											</span>
										))}
									</div>
								</div>
								<div className="flex justify-between text-sm">
									<span className="text-gray-500">
										Director:{" "}
										<span className="font-medium text-gray-900">
											{center.director}
										</span>
									</span>
									<span className="text-gray-500">
										Est. {center.established}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>

		{/* Research Opportunities */}
		<section className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						Research Opportunities
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Join our research community and contribute to groundbreaking
						discoveries.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{[
						{
							title: "Undergraduate Research",
							icon: "🎓",
							description:
								"Get hands-on research experience starting your freshman year",
							benefits: [
								"Research Scholars Program",
								"Summer Research Fellowships",
								"Conference Presentations",
								"Publication Opportunities",
							],
						},
						{
							title: "Graduate Research",
							icon: "📚",
							description:
								"Lead cutting-edge research projects with world-class faculty",
							benefits: [
								"PhD Fellowships",
								"Research Assistantships",
								"International Collaborations",
								"Industry Partnerships",
							],
						},
						{
							title: "Faculty Research",
							icon: "🔬",
							description:
								"Join our faculty and access world-class research facilities",
							benefits: [
								"Startup Packages",
								"Sabbatical Programs",
								"Collaborative Networks",
								"Grant Support",
							],
						},
					].map((opportunity, index) => (
						<div
							key={index}
							className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
						>
							<div className="text-4xl mb-4">{opportunity.icon}</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">
								{opportunity.title}
							</h3>
							<p className="text-gray-600 mb-4">{opportunity.description}</p>
							<ul className="space-y-2 text-sm text-gray-600">
								{opportunity.benefits.map((benefit, idx) => (
									<li key={idx} className="flex items-center justify-center">
										<span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
										{benefit}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	</div>
);

const AdmissionsPage = () => (
	<div>
		{/* Admissions Hero */}
		<section className="py-24 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h1 className="text-5xl font-bold mb-6">Join Beacon University</h1>
					<p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
						Begin your journey toward academic excellence and innovation. We're
						looking for passionate students ready to make a difference.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button className="bg-white text-green-700 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
							Apply Now
						</button>
						<button className="border-2 border-white text-white hover:bg-white hover:text-green-700 font-medium py-3 px-8 rounded-lg transition-all duration-200">
							Schedule Visit
						</button>
					</div>
				</div>
			</div>
		</section>

		{/* Application Process */}
		<section className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						Application Process
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Our streamlined application process is designed to help us get to
						know you better.
					</p>
				</div>

				<div className="grid md:grid-cols-4 gap-8">
					{[
						{
							step: "1",
							title: "Submit Application",
							description:
								"Complete our online application with personal information and academic history",
							icon: "📝",
						},
						{
							step: "2",
							title: "Academic Records",
							description:
								"Submit official transcripts and standardized test scores",
							icon: "📚",
						},
						{
							step: "3",
							title: "Essays & Recommendations",
							description:
								"Write personal essays and provide letters of recommendation",
							icon: "✍️",
						},
						{
							step: "4",
							title: "Review & Decision",
							description:
								"Our admissions committee reviews your application holistically",
							icon: "✅",
						},
					].map((step, index) => (
						<div key={index} className="text-center">
							<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">{step.icon}</span>
							</div>
							<div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
								{step.step}
							</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-3">
								{step.title}
							</h3>
							<p className="text-gray-600 text-sm">{step.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>

		{/* Financial Aid */}
		<section className="py-24 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						Financial Aid & Scholarships
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						We're committed to making education accessible through comprehensive
						financial support.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{[
						{
							type: "Merit Scholarships",
							amount: "Up to $25,000",
							description: "Based on academic excellence and achievements",
							icon: "🏆",
						},
						{
							type: "Need-Based Aid",
							amount: "Up to $40,000",
							description: "Financial assistance based on demonstrated need",
							icon: "💰",
						},
						{
							type: "Research Fellowships",
							amount: "Up to $30,000",
							description: "For students participating in research programs",
							icon: "🔬",
						},
						{
							type: "Work-Study Programs",
							amount: "Up to $15,000",
							description: "Part-time employment opportunities on campus",
							icon: "💼",
						},
					].map((aid, index) => (
						<div
							key={index}
							className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
						>
							<div className="text-4xl mb-4">{aid.icon}</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-2">
								{aid.type}
							</h3>
							<div className="text-2xl font-bold text-green-600 mb-3">
								{aid.amount}
							</div>
							<p className="text-gray-600 text-sm">{aid.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	</div>
);

const StudentLifePage = () => (
	<div>
		{/* Student Life Hero */}
		<section className="py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h1 className="text-5xl font-bold mb-6">Student Life at Beacon</h1>
					<p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
						Experience a vibrant campus community with endless opportunities for
						growth, learning, and connection. Your journey starts here.
					</p>
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
						{[
							{ number: "200+", label: "Student Organizations" },
							{ number: "25", label: "Sports Teams" },
							{ number: "50+", label: "Cultural Events/Year" },
							{ number: "95%", label: "Student Satisfaction" },
						].map((stat, index) => (
							<div key={index} className="text-center">
								<div className="text-3xl font-bold text-yellow-300 mb-2">
									{stat.number}
								</div>
								<div className="text-purple-100 text-sm">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>

		{/* Campus Life Categories */}
		<section className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">Campus Life</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Discover the many ways to get involved and make the most of your
						university experience.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						{
							category: "Student Organizations",
							icon: "👥",
							description:
								"Join clubs and organizations that match your interests and passions",
							examples: [
								"Student Government",
								"Academic Clubs",
								"Cultural Organizations",
								"Special Interest Groups",
							],
							highlight: "200+ active organizations",
						},
						{
							category: "Athletics & Recreation",
							icon: "🏃‍♂️",
							description:
								"Stay active with our comprehensive sports and fitness programs",
							examples: [
								"Varsity Sports",
								"Intramural Leagues",
								"Fitness Classes",
								"Outdoor Adventures",
							],
							highlight: "Division I Athletics",
						},
						{
							category: "Arts & Culture",
							icon: "🎭",
							description:
								"Express your creativity through various artistic and cultural activities",
							examples: [
								"Theater Productions",
								"Art Exhibitions",
								"Music Ensembles",
								"Cultural Festivals",
							],
							highlight: "50+ events annually",
						},
					].map((category, index) => (
						<div
							key={index}
							className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-6 hover:transform hover:scale-105"
						>
							<div className="text-4xl mb-4">{category.icon}</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-3">
								{category.category}
							</h3>
							<p className="text-gray-600 mb-4">{category.description}</p>
							<div className="space-y-2 mb-4">
								{category.examples.map((example, idx) => (
									<div
										key={idx}
										className="flex items-center text-sm text-gray-600"
									>
										<span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
										{example}
									</div>
								))}
							</div>
							<div className="p-2 bg-purple-50 rounded-lg">
								<span className="text-purple-800 text-xs font-medium">
									✨ {category.highlight}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	</div>
);

const NewsPage = () => (
	<div>
		{/* News Hero */}
		<section className="py-24 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h1 className="text-5xl font-bold mb-6">News & Events</h1>
					<p className="text-xl text-indigo-100 max-w-3xl mx-auto">
						Stay updated with the latest news, research breakthroughs, and
						upcoming events at Beacon University.
					</p>
				</div>
			</div>
		</section>

		{/* Latest News */}
		<section className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Discover the latest developments and achievements from our
						university community.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						{
							title: "Breakthrough in Cancer Research",
							date: "January 15, 2024",
							category: "Research",
							excerpt:
								"Beacon University researchers develop new immunotherapy treatment showing 85% success rate in clinical trials.",
							image: "🧬",
							readTime: "5 min read",
						},
						{
							title: "New AI Ethics Institute Launched",
							date: "January 10, 2024",
							category: "Innovation",
							excerpt:
								"University establishes groundbreaking institute to address ethical implications of artificial intelligence.",
							image: "🤖",
							readTime: "3 min read",
						},
						{
							title: "Record-Breaking Fundraising Campaign",
							date: "January 8, 2024",
							category: "University",
							excerpt:
								"Beacon University raises $500M in largest fundraising campaign in university history.",
							image: "💰",
							readTime: "4 min read",
						},
					].map((article, index) => (
						<div
							key={index}
							className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:transform hover:scale-105"
						>
							<div className="p-6">
								<div className="flex items-center justify-between mb-4">
									<span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
										{article.category}
									</span>
									<span className="text-gray-500 text-sm">
										{article.readTime}
									</span>
								</div>
								<div className="text-4xl mb-4">{article.image}</div>
								<h3 className="text-xl font-semibold text-gray-900 mb-3">
									{article.title}
								</h3>
								<p className="text-gray-600 mb-4 text-sm">{article.excerpt}</p>
								<div className="flex items-center justify-between">
									<span className="text-gray-500 text-sm">{article.date}</span>
									<button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors duration-200">
										Read More →
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	</div>
);

const ContactPage = () => (
	<div>
		{/* Contact Hero */}
		<section className="py-24 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h1 className="text-5xl font-bold mb-6">Contact Us</h1>
					<p className="text-xl text-teal-100 max-w-3xl mx-auto">
						Get in touch with us. We're here to help with any questions or
						inquiries you may have.
					</p>
				</div>
			</div>
		</section>

		{/* Contact Information */}
		<section className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
					{[
						{
							title: "Main Office",
							icon: "🏢",
							details: [
								"123 University Avenue",
								"Science City, SC 12345",
								"United States",
							],
							contact: "(555) 123-4567",
						},
						{
							title: "Admissions",
							icon: "🎓",
							details: [
								"Admissions Office",
								"Student Services Building",
								"Room 101",
							],
							contact: "admissions@beacon.university",
						},
						{
							title: "Research",
							icon: "🔬",
							details: [
								"Research Administration",
								"Innovation Center",
								"Room 205",
							],
							contact: "research@beacon.university",
						},
						{
							title: "Student Services",
							icon: "👥",
							details: [
								"Student Life Office",
								"Student Union Building",
								"Room 150",
							],
							contact: "students@beacon.university",
						},
					].map((office, index) => (
						<div
							key={index}
							className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
						>
							<div className="text-4xl mb-4">{office.icon}</div>
							<h3 className="text-lg font-semibold text-gray-900 mb-3">
								{office.title}
							</h3>
							<div className="space-y-1 mb-4">
								{office.details.map((detail, idx) => (
									<div key={idx} className="text-gray-600 text-sm">
										{detail}
									</div>
								))}
							</div>
							<div className="text-teal-600 font-medium">{office.contact}</div>
						</div>
					))}
				</div>

				{/* Contact Form */}
				<div className="grid md:grid-cols-2 gap-12">
					<div>
						<h2 className="text-3xl font-bold text-gray-900 mb-6">
							Send us a Message
						</h2>
						<form className="space-y-6">
							<div className="grid md:grid-cols-2 gap-6">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										First Name
									</label>
									<input
										type="text"
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
										placeholder="Your first name"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Last Name
									</label>
									<input
										type="text"
										className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
										placeholder="Your last name"
									/>
								</div>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Email Address
								</label>
								<input
									type="email"
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
									placeholder="your.email@example.com"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Subject
								</label>
								<select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
									<option>General Inquiry</option>
									<option>Admissions Question</option>
									<option>Research Collaboration</option>
									<option>Student Services</option>
									<option>Media Inquiry</option>
									<option>Other</option>
								</select>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Message
								</label>
								<textarea
									rows="6"
									className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
									placeholder="Tell us how we can help you..."
								></textarea>
							</div>
							<button
								type="submit"
								className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
							>
								Send Message
							</button>
						</form>
					</div>

					{/* Campus Map & Info */}
					<div>
						<h2 className="text-3xl font-bold text-gray-900 mb-6">
							Visit Our Campus
						</h2>
						<div className="bg-gray-100 rounded-lg p-8 mb-6">
							<div className="text-center">
								<div className="text-6xl mb-4">🗺️</div>
								<h3 className="text-lg font-semibold text-gray-900 mb-2">
									Interactive Campus Map
								</h3>
								<p className="text-gray-600 mb-4">
									Explore our beautiful 500-acre campus with our interactive
									map.
								</p>
								<button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200">
									View Campus Map
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
);

// Footer Component
const Footer = () => (
	<footer className="bg-gray-900 text-white py-16">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
				<div>
					<div className="flex items-center space-x-3 mb-6">
						<div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-lg flex items-center justify-center">
							<span className="text-white font-bold text-xl">B</span>
						</div>
						<div>
							<h3 className="text-xl font-bold">Beacon University</h3>
							<p className="text-sm text-gray-400">
								Health • Science • Technology
							</p>
						</div>
					</div>
					<p className="text-gray-400 mb-6">
						A world-class institution dedicated to advancing health, science,
						and technology.
					</p>
				</div>
				<div>
					<h4 className="text-lg font-semibold mb-6">Quick Links</h4>
					<ul className="space-y-3">
						<li>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-200"
							>
								About Us
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-200"
							>
								Admissions
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-200"
							>
								Research
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-200"
							>
								Student Life
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h4 className="text-lg font-semibold mb-6">Academic</h4>
					<ul className="space-y-3">
						<li>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-200"
							>
								Health Sciences
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-200"
							>
								Technology
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-200"
							>
								Sciences
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-200"
							>
								Graduate Programs
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h4 className="text-lg font-semibold mb-6">Contact</h4>
					<div className="space-y-3">
						<p className="text-gray-400">
							📍 123 University Ave
							<br />
							Science City, SC 12345
						</p>
						<p className="text-gray-400">📞 +1 (555) 123-4567</p>
						<p className="text-gray-400">✉️ info@beacon.university</p>
					</div>
				</div>
			</div>
			<div className="border-t border-gray-800 mt-12 pt-8 text-center">
				<p className="text-gray-400">
					© 2024 Beacon University. All rights reserved.
				</p>
			</div>
		</div>
	</footer>
);

// AI Chatbot Component
const Chatbot = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState([
		{
			text: "Hi! I'm your Beacon University assistant. How can I help you today?",
			sender: "bot",
		},
	]);
	const [inputValue, setInputValue] = useState("");
	const [isTyping, setIsTyping] = useState(false);

	const responses = {
		admissions: [
			"Our admissions process is designed to identify students who will thrive at Beacon University. We offer undergraduate, graduate, and international programs.",
			"Application deadlines vary by program. For undergraduate programs, the priority deadline is January 15th. Graduate programs have rolling admissions.",
			"We accept applications through our online portal. Required documents include transcripts, test scores, essays, and letters of recommendation.",
		],
		programs: [
			"Beacon University offers programs across three schools: Health Sciences, Technology & Engineering, and Natural & Applied Sciences.",
			"Our Health Sciences school includes Medicine, Nursing, Public Health, and Pharmacy programs.",
			"Technology & Engineering offers Computer Science, Engineering, AI & Robotics, and Cybersecurity programs.",
			"Natural & Applied Sciences includes Biology, Chemistry, Physics, and Environmental Science programs.",
		],
		tuition: [
			"Tuition varies by program and residency status. Undergraduate tuition for 2024-2025 is $45,000 for in-state and $55,000 for out-of-state students.",
			"We offer generous financial aid packages. Over 80% of our students receive some form of financial assistance.",
			"Graduate program tuition ranges from $35,000 to $65,000 depending on the specific program and research opportunities.",
		],
		campus: [
			"Our 500-acre campus features state-of-the-art research facilities, modern dormitories, and recreational centers.",
			"We have over 200 student organizations, 15 research centers, and world-class athletic facilities.",
			"Campus tours are available Monday through Friday. You can schedule a visit through our admissions office.",
		],
		research: [
			"Beacon University is a leading research institution with over $200 million in annual research funding.",
			"Our research focuses on breakthrough discoveries in health sciences, cutting-edge technology, and environmental solutions.",
			"Undergraduate students can participate in research projects starting their freshman year through our Research Scholars Program.",
		],
		default: [
			"I'd be happy to help you learn more about Beacon University! You can ask me about admissions, programs, tuition, campus life, or research opportunities.",
			"For specific questions, I recommend contacting our admissions office at admissions@beacon.university or calling (555) 123-4568.",
			"You can also schedule a campus visit or attend one of our virtual information sessions.",
		],
	};

	const generateResponse = (message) => {
		const lowerMessage = message.toLowerCase();

		if (
			lowerMessage.includes("admission") ||
			lowerMessage.includes("apply") ||
			lowerMessage.includes("application")
		) {
			return getRandomResponse("admissions");
		} else if (
			lowerMessage.includes("program") ||
			lowerMessage.includes("major") ||
			lowerMessage.includes("degree")
		) {
			return getRandomResponse("programs");
		} else if (
			lowerMessage.includes("tuition") ||
			lowerMessage.includes("cost") ||
			lowerMessage.includes("fee") ||
			lowerMessage.includes("financial")
		) {
			return getRandomResponse("tuition");
		} else if (
			lowerMessage.includes("campus") ||
			lowerMessage.includes("dorm") ||
			lowerMessage.includes("housing") ||
			lowerMessage.includes("visit")
		) {
			return getRandomResponse("campus");
		} else if (
			lowerMessage.includes("research") ||
			lowerMessage.includes("lab") ||
			lowerMessage.includes("study")
		) {
			return getRandomResponse("research");
		} else {
			return getRandomResponse("default");
		}
	};

	const getRandomResponse = (category) => {
		const categoryResponses = responses[category];
		return categoryResponses[
			Math.floor(Math.random() * categoryResponses.length)
		];
	};

	const handleSendMessage = () => {
		if (!inputValue.trim()) return;

		const userMessage = { text: inputValue, sender: "user" };
		setMessages((prev) => [...prev, userMessage]);
		setInputValue("");
		setIsTyping(true);

		// Simulate typing delay
		setTimeout(
			() => {
				const botResponse = {
					text: generateResponse(inputValue),
					sender: "bot",
				};
				setMessages((prev) => [...prev, botResponse]);
				setIsTyping(false);
			},
			1000 + Math.random() * 1000,
		);
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleSendMessage();
		}
	};

	return (
		<div className="fixed bottom-6 right-6 z-50">
			{/* Chat Button */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
			>
				<span className="text-2xl">{isOpen ? "✕" : "💬"}</span>
			</button>

			{/* Chat Window */}
			{isOpen && (
				<div className="absolute bottom-20 right-0 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
					{/* Chat Header */}
					<div className="bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between">
						<div className="flex items-center space-x-3">
							<div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
								<span className="text-sm font-bold">B</span>
							</div>
							<div>
								<h3 className="font-semibold">Beacon Assistant</h3>
								<p className="text-xs text-blue-100">
									Ask me about admissions!
								</p>
							</div>
						</div>
						<button
							onClick={() => setIsOpen(false)}
							className="text-blue-100 hover:text-white transition-colors"
						>
							✕
						</button>
					</div>

					{/* Chat Messages */}
					<div className="flex-1 p-4 overflow-y-auto space-y-3">
						{messages.map((message, index) => (
							<div
								key={index}
								className={`flex items-start space-x-2 ${
									message.sender === "user" ? "justify-end" : ""
								}`}
							>
								{message.sender === "bot" && (
									<div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
										<span className="text-xs">🤖</span>
									</div>
								)}
								<div
									className={`rounded-lg p-3 max-w-xs ${
										message.sender === "user"
											? "bg-blue-600 text-white"
											: "bg-gray-100"
									}`}
								>
									<p className="text-sm">{message.text}</p>
								</div>
								{message.sender === "user" && (
									<div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
										<span className="text-xs text-white">👤</span>
									</div>
								)}
							</div>
						))}

						{/* Typing Indicator */}
						{isTyping && (
							<div className="flex items-start space-x-2">
								<div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
									<span className="text-xs">🤖</span>
								</div>
								<div className="bg-gray-100 rounded-lg p-3">
									<div className="flex space-x-1">
										<div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
										<div
											className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
											style={{ animationDelay: "0.1s" }}
										></div>
										<div
											className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
											style={{ animationDelay: "0.2s" }}
										></div>
									</div>
								</div>
							</div>
						)}
					</div>

					{/* Chat Input */}
					<div className="p-4 border-t border-gray-200">
						<div className="flex space-x-2">
							<input
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
								onKeyPress={handleKeyPress}
								type="text"
								placeholder="Ask about admissions, programs..."
								className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
							/>
							<button
								onClick={handleSendMessage}
								className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
							>
								<span className="text-sm">Send</span>
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default App;
