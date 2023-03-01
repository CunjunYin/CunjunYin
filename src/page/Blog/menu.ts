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