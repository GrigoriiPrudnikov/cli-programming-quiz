const questions = [
	[
		{
			text: 'What does HTML stand for?',
			answers: [
				'Hyper Text Markup Language',
				'Highly Textual Markup Language',
				'Home Tool Markup Language',
				'Hyperlink and Text Markup Language',
			],
			right_answer: 'Hyper Text Markup Language',
		},
		{
			text: 'Which of the following is not a programming language?',
			answers: ['Python', 'Java', 'HTML', 'C++'],
			right_answer: 'HTML',
		},
		{
			text: "In Python, how do you print 'Hello, World!' to the console?",
			answers: [
				"print('Hello, World!')",
				"print('Hello', 'World!')",
				"console.log('Hello, World!')",
				"System.out.println('Hello, World!')",
			],
			right_answer: "print('Hello, World!')",
		},
		{
			text:
				'What is the output of the following code in JavaScript?\nvar x = 10;\nvar y = 5;\nconsole.log(x + y);',
			answers: ['15', '10', '5', '105'],
			right_answer: '15',
		},
		{
			text:
				'In Python, how do you declare a variable and assign it the value 5?',
			answers: ['int x = 5;', 'var x = 5;', 'x = 5;', 'let x = 5;'],
			right_answer: 'x = 5;',
		},
		{
			text: 'What is the correct way to define a function in JavaScript?',
			answers: [
				'function myFunction() {}',
				'def myFunction():',
				'void myFunction() {}',
				'func myFunction() {}',
			],
			right_answer: 'function myFunction() {}',
		},
		{
			text: 'In C++, how do you define a constant variable?',
			answers: [
				'constant int x = 5;',
				'const x = 5;',
				'int x = const 5;',
				'const int x = 5;',
			],
			right_answer: 'const int x = 5;',
		},
		{
			text:
				'What will be the output of the following code in Python?\nfor i in range(5):\n    print(i)',
			answers: ['0 1 2 3 4', '1 2 3 4 5', '0 1 2 3 4 5', '1 2 3 4'],
			right_answer: '0 1 2 3 4',
		},
		{
			text:
				'In Java, how do you declare an array of integers with 5 elements?',
			answers: [
				'array<int> arr = new array<int>(5);',
				'int[5] arr;',
				'int arr[] = new int[5];',
				'int[] arr = new int[5];',
			],
			right_answer: 'int[] arr = new int[5];',
		},
		{
			text:
				'What does the following CSS code do?\n.my-class {\n    color: red;\n}',
			answers: [
				'Sets the text color of all elements to red.',
				"Sets the background color of elements with class 'my-class' to red.",
				"Sets the text color of elements with class 'my-class' to red.",
				"Sets the border color of elements with class 'my-class' to red.",
			],
			right_answer:
				"Sets the text color of elements with class 'my-class' to red.",
		},
	],
	[
		{
			text:
				'What is the output of the following code in JavaScript?\nvar x = 5;\nconsole.log(x++);',
			answers: ['4', '5', '6', 'Error'],
			right_answer: '5',
		},
		{
			text:
				"In Python, how do you check if a key 'name' exists in a dictionary 'data'?",
			answers: [
				"if 'name' in data:",
				"if data['name']:",
				"if data.get('name'):",
				"if data.contains('name'):",
			],
			right_answer: "if 'name' in data:",
		},
		{
			text:
				"What is the output of the following code in C++?\nint x = 10;\nint y = x++;\ncout << x << ' ' << y;",
			answers: ['11 11', '10 11', '11 10', '10 10'],
			right_answer: '11 10',
		},
		{
			text:
				'In Python, what is the correct way to handle potential errors when opening a file?',
			answers: [
				'Ignore errors and proceed with the code.',
				'Use a try-except block to catch exceptions.',
				"Use the 'pass' keyword to suppress errors.",
				"Use the 'error' keyword to handle errors.",
			],
			right_answer: 'Use a try-except block to catch exceptions.',
		},
		{
			text:
				"In Java, what is the difference between '==' and '.equals()' when comparing strings?",
			answers: [
				'They are functionally the same.',
				"'==' compares the values, and '.equals()' compares the references.",
				"'==' compares the lengths, and '.equals()' compares the characters.",
				"'==' is used for case-sensitive comparison, and '.equals()' is not.",
			],
			right_answer:
				"'==' compares the values, and '.equals()' compares the references.",
		},
		{
			text:
				"What is the output of the following code in C++?\nint x = 5;\nint y = x++ + ++x;\ncout << x << ' ' << y;",
			answers: ['7 10', '8 10', '8 11', '7 11'],
			right_answer: '8 10',
		},
		{
			text:
				'In Python, which keyword is used to create a generator function?',
			answers: ['generator', 'yield', 'generate', 'next'],
			right_answer: 'yield',
		},
		{
			text:
				'In HTML, which attribute is used to define inline styles for an element?',
			answers: ['class', 'styles', 'inline-style', 'style'],
			right_answer: 'style',
		},
		{
			text:
				'What will be the output of the following code in JavaScript?\nconst arr = [1, 2, 3, 4, 5];\nconst [a, b, ...rest] = arr;\nconsole.log(rest);',
			answers: ['[1, 2, 3]', '[3, 4, 5]', '[4, 5]', '[2, 3, 4, 5]'],
			right_answer: '[3, 4, 5]',
		},
		{
			text:
				'In Python, what is the output of the following code?\nx = 10\ndef foo():\n    global x\n    x = 5\nfoo()\nprint(x)',
			answers: ['10', '5', '0', 'Error'],
			right_answer: '5',
		},
	],
	[
		{
			text:
				'What is the output of the following code in JavaScript?\nconst arr = [1, 2, 3, 4, 5];\nconst result = arr.reduce((sum, num) => sum + num, 0);\nconsole.log(result);',
			answers: ['1', '10', '15', 'Error'],
			right_answer: '15',
		},
		{
			text: "In Python, what does the 'pass' statement do?",
			answers: [
				'It stops the execution of a loop or function.',
				'It is used as a placeholder where code will be written later.',
				'It indicates a successful execution of a try block.',
				'It is used to raise custom exceptions.',
			],
			right_answer:
				'It is used as a placeholder where code will be written later.',
		},
		{
			text:
				"What is the output of the following code in C++?\nint x = 5;\nint y = ++x + x++;\ncout << x << ' ' << y;",
			answers: ['6 10', '6 11', '7 11', '7 12'],
			right_answer: '7 12',
		},
		{
			text: "In Python, what does the 'zip' function do?",
			answers: [
				'It compresses files in a zip format.',
				'It creates a zip object containing pairs of elements from two or more iterables.',
				'It extracts files from a zip archive.',
				'It zips a folder and its contents.',
			],
			right_answer:
				'It creates a zip object containing pairs of elements from two or more iterables.',
		},
		{
			text: "In JavaScript, what is the purpose of the 'let' keyword?",
			answers: [
				'It has block scope.',
				'It has function scope.',
				'It allows variable redeclaration.',
				'It specifies that the variable is shared among all instances of the class.',
			],
			right_answer: 'It has block scope.',
		},
		{
			text:
				'What will be the output of the following code in Python?\nx = 10\ndef foo():\n    x = 5\nfoo()\nprint(x)',
			answers: ['10', '5', '0', 'Error'],
			right_answer: '10',
		},
		{
			text: "In Python, what is the purpose of the 'enumerate' function?",
			answers: [
				'It returns the index of each element in a list.',
				'It iterates over a list and its indices simultaneously.',
				'It checks if an element is present in a list.',
				'It returns the count of occurrences of an element in a list.',
			],
			right_answer: 'It iterates over a list and its indices simultaneously.',
		},
		{
			text:
				'What is the output of the following code in JavaScript?\nconst numbers = [1, 2, 3, 4, 5];\nconst result = numbers.reduce((sum, num) => sum + num, 0);\nconsole.log(result);',
			answers: ['1', '10', '15', '[1, 2, 3, 4, 5]'],
			right_answer: '15',
		},
		{
			text: "In Python, what does the 'any' function do?",
			answers: [
				'It checks if all elements in an iterable are True.',
				'It checks if at least one element in an iterable is True.',
				'It checks if all elements in an iterable are False.',
				'It checks if all elements in an iterable are equal.',
			],
			right_answer: 'It checks if at least one element in an iterable is True.',
		},
		{
			text:
				'What will be the output of the following code in Python?\nx = [1, 2, 3]\ny = x\nz = x[:]\ny[0] = 10\nprint(x)\nprint(z)',
			answers: [
				'[1, 2, 3], [1, 2, 3]',
				'[1, 2, 3], [1, 2, 3]',
				'[10, 2, 3], [1, 2, 3]',
				'[1, 2, 3], [10, 2, 3]',
			],
			right_answer: '[10, 2, 3], [1, 2, 3]',
		},
	],
	[
		{
			text: "In JavaScript, what does the '==' operator check for?",
			answers: [
				'Equality of values only, not considering data types.',
				'Equality of values and data types.',
				'Equality of data types only, not considering values.',
				'The presence of a variable or value.',
			],
			right_answer: 'Equality of values only, not considering data types.',
		},
		{
			text:
				'What is the output of the following code in Python?\nmy_list = [1, 2, 3, 4]\nresult = [x * 2 for x in my_list if x % 2 == 0]\nprint(result)',
			answers: ['[2, 4]', '[2, 4, 6, 8]', '[1, 2, 3, 4]', '[4, 8]'],
			right_answer: '[4, 8]',
		},
		{
			text:
				"In C++, what does the 'const' keyword do when applied to a member function?",
			answers: [
				'It prevents the member function from being called.',
				"It specifies that the member function cannot modify the object's data members.",
				'It makes the member function accessible only within the class.',
				'It indicates that the member function is overloaded.',
			],
			right_answer:
				"It specifies that the member function cannot modify the object's data members.",
		},
		{
			text:
				'What does the following CSS code do?\n.my-class {\n    color: red;\n    color: blue;\n}',
			answers: [
				"Sets the text color of elements with class 'my-class' to red.",
				"Sets the text color of elements with class 'my-class' to blue.",
				"Sets the text color of elements with class 'my-class' to red and blue.",
				'Throws a syntax error due to conflicting rules.',
			],
			right_answer:
				"Sets the text color of elements with class 'my-class' to blue.",
		},
		{
			text: "In Python, what does the 'all' function do?",
			answers: [
				'It checks if all elements in an iterable are True.',
				'It checks if at least one element in an iterable is True.',
				'It checks if all elements in an iterable are False.',
				'It checks if all elements in an iterable are equal.',
			],
			right_answer: 'It checks if all elements in an iterable are True.',
		},
		{
			text:
				'Which of the following is a valid way to handle an exception in Python?',
			answers: [
				'try:\n    # code that may raise an exception\nexcept Exception as e:\n    # handle the exception',
				'try:\n    # code that may raise an exception\ncatch Exception as e:',
				'try:\n    # code that may raise an exception\ncatch Exception:\n    # handle the exception',
				'try:\n    # code that may raise an exception\nexcept:\n    # handle the exception',
			],
			right_answer:
				'try:\n    # code that may raise an exception\nexcept Exception as e:\n    # handle the exception',
		},
		{
			text: "In Java, what is the purpose of the 'this' keyword?",
			answers: [
				'It refers to the superclass of the current class.',
				'It refers to the instance of the current class.',
				'It is used to create a new instance of a class.',
				'It is used to access private members of the superclass.',
			],
			right_answer: 'It refers to the instance of the current class.',
		},
		{
			text:
				'What will be the output of the following code in JavaScript?\nconst x = 5;\nconst y = 3;\nconst result = x / y;\nconsole.log(result);',
			answers: ['1.6666666666666667', '1', '1.67', '1.6666666666666667'],
			right_answer: '1.6666666666666667',
		},
		{
			text: "In Python, what does the 'is' operator check for?",
			answers: [
				'Equality of values only, not considering data types.',
				'Equality of values and data types.',
				'Identity, i.e., whether two variables refer to the same object.',
				'The presence of a variable or value.',
			],
			right_answer:
				'Identity, i.e., whether two variables refer to the same object.',
		},
		{
			text:
				"What does the following SQL query do?\nSELECT name FROM employees WHERE age >= 30 AND department = 'IT';",
			answers: [
				"It selects all employees from the 'employees' table.",
				'It counts the number of employees with a salary greater than 50000.',
				'It calculates the average salary of employees in the IT department.',
				'It selects names of employees aged 30 or older in the IT department.',
			],
			right_answer:
				'It selects names of employees aged 30 or older in the IT department.',
		},
	],
	[
		{
			text: "In JavaScript, what does the '===' operator check for?",
			answers: [
				'Equality of values only, not considering data types.',
				'Equality of values and data types.',
				'Equality of data types only, not considering values.',
				'The presence of a variable or value.',
			],
			right_answer: 'Equality of values and data types.',
		},
		{
			text:
				'What is the output of the following code in Python?\ndef foo(x, y, z=0):\n    return x + y + z\nargs = [1, 2, 3]\nprint(foo(*args))',
			answers: ['6', '123', '[1, 2, 3]', 'Error'],
			right_answer: '6',
		},
		{
			text:
				'In C++, what is the output of the following code?\nint x = 5;\nint& y = x;\ny = 10;\ncout << x;',
			answers: ['5', '10', '0', 'Undefined behavior'],
			right_answer: '10',
		},
		{
			text:
				'What does the following CSS code do?\n.my-class {\n    font-size: 16px;\n}\n.my-class {\n    font-size: 24px;\n}',
			answers: [
				"Sets the font size of all elements with class 'my-class' to 16px.",
				"Sets the font size of all elements with class 'my-class' to 24px.",
				'Throws a syntax error due to duplicate class names.',
				"Sets the font size of the first occurrence of 'my-class' to 16px and the rest to 24px.",
			],
			right_answer:
				"Sets the font size of all elements with class 'my-class' to 24px.",
		},
		{
			text: "In Python, what does the 'sorted' function do?",
			answers: [
				'It sorts the elements of an iterable in ascending order and returns a new list.',
				'It sorts the elements of an iterable in descending order and returns a new list.',
				'It checks if all elements in an iterable are True.',
				'It reverses the elements of an iterable in place.',
			],
			right_answer:
				'It sorts the elements of an iterable in ascending order and returns a new list.',
		},
		{
			text:
				"Which of the following is true about the 'try-except-else' block in Python?",
			answers: [
				"The 'else' block is executed if an exception is raised.",
				"The 'else' block is optional and can be omitted.",
				"The 'try' block is executed only if an exception occurs.",
				"The 'except' block must be placed after the 'else' block.",
			],
			right_answer: "The 'else' block is executed if an exception is raised.",
		},
		{
			text:
				"In Java, what is the purpose of the 'final' keyword when used with a variable?",
			answers: [
				'It specifies that the variable is initialized at compile-time.',
				"It indicates that the variable's value cannot be modified after initialization.",
				'It ensures that the variable cannot be accessed outside the class.',
				'It makes the variable accessible within the class only.',
			],
			right_answer:
				"It indicates that the variable's value cannot be modified after initialization.",
		},
		{
			text:
				"What will be the output of the following code in JavaScript?\nconst x = '5';\nconst y = 3;\nconst result = x - y;\nconsole.log(result);",
			answers: ['2', "'2'", '2', 'Error'],
			right_answer: '2',
		},
		{
			text: "In Python, what is the purpose of the 'any' keyword?",
			answers: [
				'It is used to check if an iterable is empty.',
				'It is used to check if a condition is True.',
				'It is used to define custom exceptions.',
				'It is used to terminate a loop early.',
			],
			right_answer: 'It is used to check if a condition is True.',
		},
		{
			text:
				'What does the following SQL query do?\nSELECT COUNT(*) FROM employees WHERE salary > 50000;',
			answers: [
				"It selects all employees from the 'employees' table.",
				'It counts the number of employees with a salary greater than 50000.',
				'It selects employees with a salary equal to or greater than 50000.',
				'It selects employees with a salary less than or equal to 50000.',
			],
			right_answer:
				'It counts the number of employees with a salary greater than 50000.',
		},
	],
	[
		{
			text:
				"In JavaScript, what is the purpose of the 'Math.floor()' function?",
			answers: [
				'It returns the smallest integer less than or equal to a given number.',
				'It rounds a number to the nearest integer.',
				'It returns the largest integer less than or equal to a given number.',
				'It returns the integer part of a given number.',
			],
			right_answer:
				'It returns the smallest integer less than or equal to a given number.',
		},
		{
			text:
				'What is the output of the following code in Python?\ndef foo(x, y, *args):\n    return x + y + sum(args)\nprint(foo(1, 2))\nprint(foo(1, 2, 3, 4))',
			answers: ['3, 6', '6, 10', '3, 10', 'Error'],
			right_answer: '6, 10',
		},
		{
			text:
				'In C++, what is the output of the following code?\nint x = 5;\nint* p = &x;\n*p = 10;\ncout << x;',
			answers: ['5', '10', '0', 'Undefined behavior'],
			right_answer: '10',
		},
		{
			text:
				'What does the following CSS code do?\n.my-class {\n    font-size: 16px;\n}\ndiv.my-class {\n    font-size: 24px;\n}',
			answers: [
				"Sets the font size of all elements with class 'my-class' to 16px.",
				"Sets the font size of the 'div' element with class 'my-class' to 24px.",
				"Sets the font size of all elements with class 'my-class' to 24px.",
				'Throws a syntax error due to conflicting selectors.',
			],
			right_answer:
				"Sets the font size of the 'div' element with class 'my-class' to 24px.",
		},
		{
			text: "In Python, what does the 'sorted' function do?",
			answers: [
				'It sorts the elements of an iterable in ascending order and returns a new list.',
				'It sorts the elements of an iterable in descending order and returns a new list.',
				'It checks if all elements in an iterable are True.',
				'It reverses the elements of an iterable in place.',
			],
			right_answer:
				'It sorts the elements of an iterable in ascending order and returns a new list.',
		},
		{
			text:
				"Which of the following is true about the 'try-except-finally' block in Python?",
			answers: [
				"The 'finally' block is executed only if an exception is raised.",
				"The 'finally' block is optional and can be omitted.",
				"The 'finally' block is executed whether an exception is raised or not.",
				"The 'try' block must be placed after the 'finally' block.",
			],
			right_answer:
				"The 'finally' block is executed whether an exception is raised or not.",
		},
		{
			text:
				"In Java, what is the purpose of the 'static' keyword when used with a variable?",
			answers: [
				'It ensures that the variable is accessible within the class only.',
				'It specifies that the variable is not initialized.',
				'It allows the variable to be accessed without creating an instance of the class.',
				'It indicates that the variable cannot be modified after initialization.',
			],
			right_answer:
				'It allows the variable to be accessed without creating an instance of the class.',
		},
		{
			text:
				"What will be the output of the following code in JavaScript?\nconst x = '5';\nconst y = 3;\nconst result = x + y;\nconsole.log(result);",
			answers: ['8', "'8'", '53', 'Error'],
			right_answer: "'8'",
		},
		{
			text: "In Python, what is the purpose of the 'assert' statement?",
			answers: [
				'It checks if a condition is True and raises an exception if False.',
				'It raises a custom exception to indicate an error.',
				'It is used to perform type casting of variables.',
				'It checks if a variable is defined and not None.',
			],
			right_answer:
				'It checks if a condition is True and raises an exception if False.',
		},
		{
			text:
				"What does the following SQL query do?\nSELECT AVG(salary) FROM employees WHERE department = 'IT';",
			answers: [
				"It selects all employees from the 'employees' table.",
				'It counts the number of employees with a salary greater than 50000.',
				'It calculates the average salary of employees in the IT department.',
				'It calculates the highest salary among employees in the IT department.',
			],
			right_answer:
				'It calculates the average salary of employees in the IT department.',
		},
	],
	[
		{
			text:
				"In JavaScript, what is the purpose of the 'Math.floor()' function?",
			answers: [
				'It returns the smallest integer less than or equal to a given number.',
				'It rounds a number to the nearest integer.',
				'It returns the largest integer less than or equal to a given number.',
				'It returns the integer part of a given number.',
			],
			right_answer:
				'It returns the smallest integer less than or equal to a given number.',
		},
		{
			text:
				'What is the output of the following code in Python?\ndef foo(x, y, *args):\n    return x + y + sum(args)\nprint(foo(1, 2))\nprint(foo(1, 2, 3, 4))',
			answers: ['3, 6', '6, 10', '3, 10', 'Error'],
			right_answer: '6, 10',
		},
		{
			text:
				'In C++, what is the output of the following code?\nint x = 5;\nint* p = &x;\n*p = 10;\ncout << x;',
			answers: ['5', '10', '0', 'Undefined behavior'],
			right_answer: '10',
		},
		{
			text:
				'What does the following CSS code do?\n.my-class {\n    font-size: 16px;\n}\ndiv.my-class {\n    font-size: 24px;\n}',
			answers: [
				"Sets the font size of all elements with class 'my-class' to 16px.",
				"Sets the font size of the 'div' element with class 'my-class' to 24px.",
				"Sets the font size of all elements with class 'my-class' to 24px.",
				'Throws a syntax error due to conflicting selectors.',
			],
			right_answer:
				"Sets the font size of the 'div' element with class 'my-class' to 24px.",
		},
		{
			text: "In Python, what does the 'sorted' function do?",
			answers: [
				'It sorts the elements of an iterable in ascending order and returns a new list.',
				'It sorts the elements of an iterable in descending order and returns a new list.',
				'It checks if all elements in an iterable are True.',
				'It reverses the elements of an iterable in place.',
			],
			right_answer:
				'It sorts the elements of an iterable in ascending order and returns a new list.',
		},
		{
			text:
				"Which of the following is true about the 'try-except-finally' block in Python?",
			answers: [
				"The 'finally' block is executed only if an exception is raised.",
				"The 'finally' block is optional and can be omitted.",
				"The 'finally' block is executed whether an exception is raised or not.",
				"The 'try' block must be placed after the 'finally' block.",
			],
			right_answer:
				"The 'finally' block is executed whether an exception is raised or not.",
		},
		{
			text:
				"In Java, what is the purpose of the 'static' keyword when used with a variable?",
			answers: [
				'It ensures that the variable is accessible within the class only.',
				'It specifies that the variable is not initialized.',
				'It allows the variable to be accessed without creating an instance of the class.',
				'It indicates that the variable cannot be modified after initialization.',
			],
			right_answer:
				'It allows the variable to be accessed without creating an instance of the class.',
		},
		{
			text:
				"What will be the output of the following code in JavaScript?\nconst x = '5';\nconst y = 3;\nconst result = x + y;\nconsole.log(result);",
			answers: ['8', "'8'", '53', 'Error'],
			right_answer: "'8'",
		},
		{
			text: "In Python, what is the purpose of the 'assert' statement?",
			answers: [
				'It checks if a condition is True and raises an exception if False.',
				'It raises a custom exception to indicate an error.',
				'It is used to perform type casting of variables.',
				'It checks if a variable is defined and not None.',
			],
			right_answer:
				'It checks if a condition is True and raises an exception if False.',
		},
		{
			text:
				"What does the following SQL query do?\nSELECT AVG(salary) FROM employees WHERE department = 'IT';",
			answers: [
				"It selects all employees from the 'employees' table.",
				'It counts the number of employees with a salary greater than 50000.',
				'It calculates the average salary of employees in the IT department.',
				'It calculates the highest salary among employees in the IT department.',
			],
			right_answer:
				'It calculates the average salary of employees in the IT department.',
		},
	],
	[
		{
			text: "In JavaScript, what does the 'Math.floor()' function do?",
			answers: [
				'It returns the smallest integer less than or equal to a given number.',
				'It rounds a number to the nearest integer.',
				'It returns the largest integer less than or equal to a given number.',
				'It returns the integer part of a given number.',
			],
			right_answer:
				'It returns the smallest integer less than or equal to a given number.',
		},
		{
			text:
				'What is the output of the following code in Python?\ndef foo(x, y, *args):\n    return x + y + sum(args)\nprint(foo(1, 2))\nprint(foo(1, 2, 3, 4))',
			answers: ['3, 6', '6, 10', '3, 10', 'Error'],
			right_answer: '6, 10',
		},
		{
			text:
				'In C++, what is the output of the following code?\nint x = 5;\nint* p = &x;\n*p = 10;\ncout << x;',
			answers: ['5', '10', '0', 'Undefined behavior'],
			right_answer: '10',
		},
		{
			text:
				'What does the following CSS code do?\n.my-class {\n    font-size: 16px;\n}\ndiv.my-class {\n    font-size: 24px;\n}',
			answers: [
				"Sets the font size of all elements with class 'my-class' to 16px.",
				"Sets the font size of the 'div' element with class 'my-class' to 24px.",
				"Sets the font size of all elements with class 'my-class' to 24px.",
				'Throws a syntax error due to conflicting selectors.',
			],
			right_answer:
				"Sets the font size of the 'div' element with class 'my-class' to 24px.",
		},
		{
			text: "In Python, what does the 'sorted' function do?",
			answers: [
				'It sorts the elements of an iterable in ascending order and returns a new list.',
				'It sorts the elements of an iterable in descending order and returns a new list.',
				'It checks if all elements in an iterable are True.',
				'It reverses the elements of an iterable in place.',
			],
			right_answer:
				'It sorts the elements of an iterable in ascending order and returns a new list.',
		},
		{
			text:
				"Which of the following is true about the 'try-except-finally' block in Python?",
			answers: [
				"The 'finally' block is executed only if an exception is raised.",
				"The 'finally' block is optional and can be omitted.",
				"The 'finally' block is executed whether an exception is raised or not.",
				"The 'try' block must be placed after the 'finally' block.",
			],
			right_answer:
				"The 'finally' block is executed whether an exception is raised or not.",
		},
		{
			text:
				"In Java, what is the purpose of the 'static' keyword when used with a variable?",
			answers: [
				'It ensures that the variable is accessible within the class only.',
				'It specifies that the variable is not initialized.',
				'It allows the variable to be accessed without creating an instance of the class.',
				'It indicates that the variable cannot be modified after initialization.',
			],
			right_answer:
				'It allows the variable to be accessed without creating an instance of the class.',
		},
		{
			text:
				"What will be the output of the following code in JavaScript?\nconst x = '5';\nconst y = 3;\nconst result = x + y;\nconsole.log(result);",
			answers: ['8', "'8'", '53', 'Error'],
			right_answer: "'8'",
		},
		{
			text: "In Python, what is the purpose of the 'assert' statement?",
			answers: [
				'It checks if a condition is True and raises an exception if False.',
				'It raises a custom exception to indicate an error.',
				'It is used to perform type casting of variables.',
				'It checks if a variable is defined and not None.',
			],
			right_answer:
				'It checks if a condition is True and raises an exception if False.',
		},
		{
			text:
				"What does the following SQL query do?\nSELECT AVG(salary) FROM employees WHERE department = 'IT';",
			answers: [
				"It selects all employees from the 'employees' table.",
				'It counts the number of employees with a salary greater than 50000.',
				'It calculates the average salary of employees in the IT department.',
				'It calculates the highest salary among employees in the IT department.',
			],
			right_answer:
				'It calculates the average salary of employees in the IT department.',
		},
	],
	[
		{
			text: "In JavaScript, what does the 'Math.floor()' function do?",
			answers: [
				'It returns the smallest integer less than or equal to a given number.',
				'It rounds a number to the nearest integer.',
				'It returns the largest integer less than or equal to a given number.',
				'It returns the integer part of a given number.',
			],
			right_answer:
				'It returns the smallest integer less than or equal to a given number.',
		},
		{
			text:
				'What is the output of the following code in Python?\ndef foo(x, y, *args):\n    return x + y + sum(args)\nprint(foo(1, 2))\nprint(foo(1, 2, 3, 4))',
			answers: ['3, 6', '6, 10', '3, 10', 'Error'],
			right_answer: '6, 10',
		},
		{
			text:
				'In C++, what is the output of the following code?\nint x = 5;\nint* p = &x;\n*p = 10;\ncout << x;',
			answers: ['5', '10', '0', 'Undefined behavior'],
			right_answer: '10',
		},
		{
			text:
				'What does the following CSS code do?\n.my-class {\n    font-size: 16px;\n}\ndiv.my-class {\n    font-size: 24px;\n}',
			answers: [
				"Sets the font size of all elements with class 'my-class' to 16px.",
				"Sets the font size of the 'div' element with class 'my-class' to 24px.",
				"Sets the font size of all elements with class 'my-class' to 24px.",
				'Throws a syntax error due to conflicting selectors.',
			],
			right_answer:
				"Sets the font size of the 'div' element with class 'my-class' to 24px.",
		},
		{
			text: "In Python, what does the 'sorted' function do?",
			answers: [
				'It sorts the elements of an iterable in ascending order and returns a new list.',
				'It sorts the elements of an iterable in descending order and returns a new list.',
				'It checks if all elements in an iterable are True.',
				'It reverses the elements of an iterable in place.',
			],
			right_answer:
				'It sorts the elements of an iterable in ascending order and returns a new list.',
		},
		{
			text:
				"Which of the following is true about the 'try-except-finally' block in Python?",
			answers: [
				"The 'finally' block is executed only if an exception is raised.",
				"The 'finally' block is optional and can be omitted.",
				"The 'finally' block is executed whether an exception is raised or not.",
				"The 'try' block must be placed after the 'finally' block.",
			],
			right_answer:
				"The 'finally' block is executed whether an exception is raised or not.",
		},
		{
			text:
				"In Java, what is the purpose of the 'static' keyword when used with a variable?",
			answers: [
				'It ensures that the variable is accessible within the class only.',
				'It specifies that the variable is not initialized.',
				'It allows the variable to be accessed without creating an instance of the class.',
				'It indicates that the variable cannot be modified after initialization.',
			],
			right_answer:
				'It allows the variable to be accessed without creating an instance of the class.',
		},
		{
			text:
				"What will be the output of the following code in JavaScript?\nconst x = '5';\nconst y = 3;\nconst result = x + y;\nconsole.log(result);",
			answers: ['8', "'8'", '53', 'Error'],
			right_answer: "'8'",
		},
		{
			text: "In Python, what is the purpose of the 'assert' statement?",
			answers: [
				'It checks if a condition is True and raises an exception if False.',
				'It raises a custom exception to indicate an error.',
				'It is used to perform type casting of variables.',
				'It checks if a variable is defined and not None.',
			],
			right_answer:
				'It checks if a condition is True and raises an exception if False.',
		},
		{
			text:
				"What does the following SQL query do?\nSELECT AVG(salary) FROM employees WHERE department = 'IT';",
			answers: [
				"It selects all employees from the 'employees' table.",
				'It counts the number of employees with a salary greater than 50000.',
				'It calculates the average salary of employees in the IT department.',
				'It calculates the highest salary among employees in the IT department.',
			],
			right_answer:
				'It calculates the average salary of employees in the IT department.',
		},
	],
	[
		{
			text: "In JavaScript, what does the 'Math.floor()' function do?",
			answers: [
				'It returns the smallest integer less than or equal to a given number.',
				'It rounds a number to the nearest integer.',
				'It returns the largest integer less than or equal to a given number.',
				'It returns the integer part of a given number.',
			],
			right_answer:
				'It returns the smallest integer less than or equal to a given number.',
		},
		{
			text:
				'What is the output of the following code in Python?\ndef foo(x, y, *args):\n    return x + y + sum(args)\nprint(foo(1, 2))\nprint(foo(1, 2, 3, 4))',
			answers: ['3, 6', '6, 10', '3, 10', 'Error'],
			right_answer: '6, 10',
		},
		{
			text:
				'In C++, what is the output of the following code?\nint x = 5;\nint* p = &x;\n*p = 10;\ncout << x;',
			answers: ['5', '10', '0', 'Undefined behavior'],
			right_answer: '10',
		},
		{
			text:
				'What does the following CSS code do?\n.my-class {\n    font-size: 16px;\n}\ndiv.my-class {\n    font-size: 24px;\n}',
			answers: [
				"Sets the font size of all elements with class 'my-class' to 16px.",
				"Sets the font size of the 'div' element with class 'my-class' to 24px.",
				"Sets the font size of all elements with class 'my-class' to 24px.",
				'Throws a syntax error due to conflicting selectors.',
			],
			right_answer:
				"Sets the font size of the 'div' element with class 'my-class' to 24px.",
		},
		{
			text: "In Python, what does the 'sorted' function do?",
			answers: [
				'It sorts the elements of an iterable in ascending order and returns a new list.',
				'It sorts the elements of an iterable in descending order and returns a new list.',
				'It checks if all elements in an iterable are True.',
				'It reverses the elements of an iterable in place.',
			],
			right_answer:
				'It sorts the elements of an iterable in ascending order and returns a new list.',
		},
		{
			text:
				"Which of the following is true about the 'try-except-finally' block in Python?",
			answers: [
				"The 'finally' block is executed only if an exception is raised.",
				"The 'finally' block is optional and can be omitted.",
				"The 'finally' block is executed whether an exception is raised or not.",
				"The 'try' block must be placed after the 'finally' block.",
			],
			right_answer:
				"The 'finally' block is executed whether an exception is raised or not.",
		},
		{
			text:
				"In Java, what is the purpose of the 'static' keyword when used with a variable?",
			answers: [
				'It ensures that the variable is accessible within the class only.',
				'It specifies that the variable is not initialized.',
				'It allows the variable to be accessed without creating an instance of the class.',
				'It indicates that the variable cannot be modified after initialization.',
			],
			right_answer:
				'It allows the variable to be accessed without creating an instance of the class.',
		},
		{
			text:
				"What will be the output of the following code in JavaScript?\nconst x = '5';\nconst y = 3;\nconst result = x + y;\nconsole.log(result);",
			answers: ['8', "'8'", '53', 'Error'],
			right_answer: "'8'",
		},
		{
			text: "In Python, what is the purpose of the 'assert' statement?",
			answers: [
				'It checks if a condition is True and raises an exception if False.',
				'It raises a custom exception to indicate an error.',
				'It is used to perform type casting of variables.',
				'It checks if a variable is defined and not None.',
			],
			right_answer:
				'It checks if a condition is True and raises an exception if False.',
		},
		{
			text:
				"What does the following SQL query do?\nSELECT AVG(salary) FROM employees WHERE department = 'IT';",
			answers: [
				"It selects all employees from the 'employees' table.",
				'It counts the number of employees with a salary greater than 50000.',
				'It calculates the average salary of employees in the IT department.',
				'It calculates the highest salary among employees in the IT department.',
			],
			right_answer:
				'It calculates the average salary of employees in the IT department.',
		},
	],
]

export default questions