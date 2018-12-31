The [exams package](http://www.r-exams.org/) for the R statistics software provides functions to create exams. You can export
your exams to different formats, like pdf, docx or moodle import files. The exams are written
in Sweave files (.Rnw), which combine R code and Latex code. If you don't like Latex, you can also use Markdown (.Rmd).
It is much easier to start with the exams package if you write small exercises instead of exam tasks.

In this article I want to give you a short introduction on how to write such exams and exercises.
I will be focusing on Rnw files, which use Latex. You can write these files the way you like, but
you have to use some special commands and environments. These are needed to give the interpreter of the exams package the necessary
information to create the exams and export them correctly. 

## Basic structure
Every exam consists of a question and a solution. You need to encapsulate these two in Latex environments
like this:

	\begin{question}
		What is the sum of 3 and 5?
	\end{question}
	\begin{solution}
		The sum of 3 and 5 is 8.
	\end{solution}

There are different types of questions/answers: like multiple choice questions (with multiple correct answers) or single choice questions.
For the question above we would expect a single number as answer. For multiple choice or single choice questions you should
use the *answerlist* function in the question and solution environment. The exam can then be displayed differently in a Moodle platform or
in a PDF file. See this example:

	\begin{question}
		What is the sum of 3 and 5?
		<<echo=FALSE, results=tex>>=
		answerlist(c(8,9,7,10))
		@
	\end{question}
	\begin{solution}
		The sum of 3 and 5 is 8. Hence the answer options were
		<<echo=FALSE, results=tex>>=
		answerlist(c("True", "False", "False", "False"))
		@
	\end{solution}

Basically you can use every R and Latex command you like to design your exam.

If you use the *exams2pdf("myfile.Rnw")* command to export the exam as a PDF, the file is read by Sweave. The R commands
will be executed and the result is a latex file. Then a template is applied on the Latex file. If you want to export
the exam to an other format, an other template may be used. For exams2pdf the template *plain.tex* is used. If you
want to see it, you could [download the source of the exams package](https://cran.r-project.org/web/packages/exams/index.html)
and have a look at the exams/inst/tex/ directory. In this template you can also see how the solution and question evironment is declared.
If you are more interested at the different files created in the export process, use the *verbose* parameter of exams2pdf.

## Meta Information about your exercise

Last but not least, you have to define some special commands, to store information about your exam. For instance,
which answers are correct or what question type you used. These commands are typically at the bottom of your Rnw file:

	%% META-INFORMATION
	%% \extype{schoice}
	%% \exsolution{1000}
	%% \exname{Simple addition}

This were the basic commands you should use to design your exams. It is also recommended to use commands like *mchoice2string* etc from
the exams package in the meta information section.
You will learn about these commands if you read a lot of examples and tutorials on [r-exams.org](http://www.r-exams.org). 
Unfortunately these commands sometimes make the exams quite hard to read.

But I didn't mention the real power of such exams yet:
you can use random numbers for your exam/exercise. For instance, you could pick two random numbers and ask for the sum of
them.

	<<echo=FALSE, results=tex>>=
	firstNumber = sample(1:20, 1);
	secondNumber = sample(1:20, 1);
	sum = firstNumber + secondNumber;
	@
	\begin{question}
		What is the sum of \Sexpr{firstNumber} and \Sexpr{secondNumber}?
	\end{question}
	\begin{solution}
		The sum of \Sexpr{firstNumber} and \Sexpr{secondNumber} is \Sexpr{sum}. 
	\end{solution}
	%% META-INFORMATION
	%% \extype{num}
	%% \exsolution{\Sexpr{sum}}
	%% \exname{Simple addition}

It is also recommended to change the order of the answers when using multiple/single choice
questions.

