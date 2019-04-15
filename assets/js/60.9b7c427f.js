(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{368:function(s,t,a){"use strict";a.r(t);var n=a(43),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h4",{attrs:{id:"run-tsql-on-an-azure-sql-database-with-azure-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-tsql-on-an-azure-sql-database-with-azure-functions","aria-hidden":"true"}},[s._v("#")]),s._v(" Run TSQL on an Azure SQL database with Azure Functions")]),s._v(" "),a("p",[s._v("I've recently been adding Azure SQL tips such as "),a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks145/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Easily reset the Administrator password for an Azure SQL database"),a("OutboundLink")],1),s._v(" and "),a("a",{attrs:{href:"http://www.michaelcrump.net/azure-tips-and-tricks146/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Rename an Azure SQL database"),a("OutboundLink")],1),s._v('. and you all seem to like them. So I\'m back with another SQL post that addresses another common scenario that folks ask "How do I run TSQL on an Azure SQL database with Azure Functions"?')]),s._v(" "),a("h4",{attrs:{id:"sql-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-database","aria-hidden":"true"}},[s._v("#")]),s._v(" SQL Database")]),s._v(" "),a("p",[s._v("Before we begin you'll need to grab the connection string from the database you created earlier. Simply select "),a("strong",[s._v("SQL Databases")]),s._v(" and select your database on the SQL databases page.")]),s._v(" "),a("p",[s._v("Click "),a("strong",[s._v("Show database connection strings")]),s._v(" and copy the string to your clipboard.")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/files/azconstring1.png")}}),s._v(" "),a("p",[s._v("Go ahead and replace {your_username} and {your_password} placeholders with real values and save it somewhere easily accessible.")]),s._v(" "),a("h4",{attrs:{id:"azure-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#azure-functions","aria-hidden":"true"}},[s._v("#")]),s._v(" Azure Functions")]),s._v(" "),a("p",[s._v("Create a new Azure Function and select Timer Trigger. You typically want to store this secret in "),a("strong",[s._v("Platform features > Application settings")]),s._v(" in the "),a("strong",[s._v("Connection strings")]),s._v(" placeholder. So go ahead and do that as shown below:")]),s._v(" "),a("img",{attrs:{src:s.$withBase("/files/azconstring2.png")}}),s._v(" "),a("p",[s._v("Now use the following code")]),s._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token preprocessor property"}},[s._v("#r ")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"System.Configuration"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token preprocessor property"}},[s._v("#r ")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"System.Data"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Configuration"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SqlClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Threading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Tasks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Task")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Run")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimerInfo")]),s._v(" myTimer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TraceWriter")]),s._v(" log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ConfigurationManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ConnectionStrings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sqldb_connection"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ConnectionString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SqlConnection")]),s._v(" conn "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SqlConnection")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" text "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UPDATE MichaelTestDB.User "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" \n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SET [Item] = 5  WHERE DateAdded < GetDate();"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SqlCommand")]),s._v(" cmd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SqlCommand")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" conn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" rows "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" cmd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ExecuteNonQueryAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])])])},[],!1,null,null,null);t.default=e.exports}}]);