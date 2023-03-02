import { MenuType } from './Types/MentType';

export var menu: MenuType =
{
	title: 'Blogs',
	haveBlogs: true,
	hasChildren: true,
	children: [
		{
			title: "Software Quality Assurance",
			haveBlogs: true,
			hasChildren: true,
			children: [
				{
					title: "Introduction to Software QA and Testing",
					uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/SoftwareTesting&QualityAssurance/01.Introduction.md",
					excerpt: "This article explain key terminologies used in Software Quality Assurance(QA) and Testing. And intruduce few most common testing methods used in Information and Communication Industries",
					background: "#EABA6B",
					hasChildren: false,
					children: []
				},
				{
					title: "Unit Testing",
					uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/SoftwareTesting&QualityAssurance/02.UnitTesting.md",
					excerpt: "Process to do unit testing and types of unit testing",
					background: "#EABA6B",
					hasChildren: false,
					children: []
				}
			]
		},
		{
			title: "Machine Learning",
			haveBlogs: true,
			hasChildren: true,
			children: [
				{
					title: "Introduction to Machine Learning",
					uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/MachineLearning/01.Introduction.md",
					excerpt: "This article explain some key concpet in machine learning landscape.",
					background: "#EABA6B",
					hasChildren: false,
					children: []
				}
			]
		},
		{
			title: "Clould Computing",
			haveBlogs: true,
			hasChildren: true,
			children: [
				{
					title: "Introduction to Clould Computing",
					uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/CloudComputing/01.Introduction.md",
					excerpt: "Explain the concept of cloud and type of services provided by cloud.",
					background: "#EABA6B",
					hasChildren: false,
					children: []
				},
				{
					title: "Virtualization",
					uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/CloudComputing/02.virtualization.md",
					excerpt: "Explain the virtualization technology and how it's important to cloud.",
					background: "#EABA6B",
					hasChildren: false,
					children: []
				},
				{
					title: "Virtualization: Docker",
					uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/CloudComputing/03.docker.md",
					excerpt: "Docker",
					background: "#EABA6B",
					hasChildren: false,
					children: []
				}
			]
		},
		{
			title: "Design Patterns",
			haveBlogs: false,
			hasChildren: true,
			children: [
				{
					title: "Behavioral Design Patterns",
					haveBlogs: true,
					hasChildren: true,
					children: [
						{
							title: "Chain Of Responsibility",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/DesignPatterns/Behavioral%20Design%20Patterns/01.ChainOfResponsibility.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
						{
							title: "Command",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/DesignPatterns/Behavioral%20Design%20Patterns/02.Command.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
						{
							title: "Iterator",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/DesignPatterns/Behavioral%20Design%20Patterns/03.Iterator.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
						{
							title: "Mediator",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/DesignPatterns/Behavioral%20Design%20Patterns/04.Mediator.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
						{
							title: "Memento",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/DesignPatterns/Behavioral%20Design%20Patterns/05.Memento.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
						{
							title: "Observer",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/DesignPatterns/Behavioral%20Design%20Patterns/06.Observer.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
						{
							title: "State",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/DesignPatterns/Behavioral%20Design%20Patterns/07.State.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
						{
							title: "Strategy",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/DesignPatterns/Behavioral%20Design%20Patterns/08.Strategy.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
						{
							title: "Template Method",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/DesignPatterns/Behavioral%20Design%20Patterns/09.TemplateMethod.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
						{
							title: "Visitor",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/DesignPatterns/Behavioral%20Design%20Patterns/10.Visitor.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
					]
				},
				{
					title: "Creational Patterns",
					haveBlogs: true,
					hasChildren: true,
					children: [
						{
							title: "Factory Method",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/DesignPatterns/Creational%20Patterns/01.FactoryMethod.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
						{
							title: "Abstract Factory",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/DesignPatterns/Creational%20Patterns/02.AbstractFactory.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
						{
							title: "Builder",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/DesignPatterns/Creational%20Patterns/03.Builder.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
						{
							title: "Prototype",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/DesignPatterns/Creational%20Patterns/04.Prototype.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
						{
							title: "Singleton",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/DesignPatterns/Creational%20Patterns/05.Singleton.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
					]
				},
				{
					title: "Structural Design Patterns",
					haveBlogs: true,
					hasChildren: true,
					children: [
						{
							title: "Adapter",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/DesignPatterns/Structural%20Design%20Patterns/01.Adapter.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
						{
							title: "Bridge",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/DesignPatterns/Structural%20Design%20Patterns/02.Bridge.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
						{
							title: "Composite",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/DesignPatterns/Structural%20Design%20Patterns/03.Composite.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
						{
							title: "Decorator",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/DesignPatterns/Structural%20Design%20Patterns/04.Decorator.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
						{
							title: "Facade",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/DesignPatterns/Structural%20Design%20Patterns/05.Facade.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
						{
							title: "Flyweight",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/DesignPatterns/Structural%20Design%20Patterns/06.Flyweight.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
						{
							title: "Proxy",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/DesignPatterns/Structural%20Design%20Patterns/07.Proxy.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
					]
				},
				{
					title: "Other",
					haveBlogs: true,
					hasChildren: true,
					children: [
						{
							title: "Dependency Injection",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/DesignPatterns/01.DependencyInjection.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
					]
				}
			]
		},
		{
			title: "Protocols",
			haveBlogs: false,
			hasChildren: true,
			children: [
				{
					title: "Oauth 2 & OpenID",
					haveBlogs: true,
					hasChildren: true,
					children: [
						{
							title: "OAuth and OpenID Connect",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/Protocols/OAuth2.0/01.Concepts.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
						{
							title: "OAuth Authorization Code",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/Protocols/OAuth2.0/02.AuthorizationCode.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
						{
							title: "OAuth Access Token",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/Protocols/OAuth2.0/03.AccessToken.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
						{
							title: "OAuth Refresh Token",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/Protocols/OAuth2.0/04.RefreshToken.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
						{
							title: "OAuth OpenId Connect",
							uri: "https://raw.githubusercontent.com/CunjunYin/notes/main/Protocols/OAuth2.0/05.OpenIdConnect.md",
							excerpt: "",
							background: "#EABA6B",
							hasChildren: false,
							children: []
						},
					]
				}
			]
		}
	]
}