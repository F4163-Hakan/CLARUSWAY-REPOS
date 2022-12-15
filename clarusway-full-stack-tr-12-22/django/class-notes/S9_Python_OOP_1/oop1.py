import os
os.system('cls' if os.name == 'nt' else 'clear')
print("--------------------------------------")

#! Topics to be Covered:
#* Everything in Python is class
#* Defining class
#* Defining class attributes
#* Difference between class attributes and instance attributes
#* SELF keyword
#* Defining methods
#* Class Methods vs. Static Methods and Instance Methods
#* Special methods (init, str)
#* 4 pillars of OOP:
    #? Encapsulation
    #? Abstraction
    #? Inheritance
        #? Multiple inheritance
    #? Polymorphism
        #? Overriding methods
#* Inner class
#* Overloading an operator (optional)
#* Abstract base class


#! What is OOP?
""" # Object Oriented programming (OOP) is a programming paradigm that relies on the concept of classes and objects.
# It is used to structure a software program into simple, reusable pieces of code blueprints (usually called classes), which are used to create individual instances of objects.
# significantly reduces code repetition by classifying similar structures (dont repeat yourself)
# Easier to debug, classes often contain all applicable information to them
# Secure, protects information through encapsulation """


#! Everything in Python is class
""" # Python >generally class based  vs.  javascript >generally function based
def print_types(data):
    for i in data:
        print(i, type(i))

test = [122, "victor", [1, 2, 3], (1,2,3), {1,2,3}, True, lambda x:x]

print_types(test) """

#! defining class:

""" # "class" keyword for defining
# There is a convention among languages that the class name should be capitalized.

class Person:
    name = "victor"  # class attrinutes/properties
    age = 33

person1 = Person()  # creating object or instance
person2 = Person()

print(person1.name) # instances inherites class atributes
print(person2.age)

Person.job = "developer"
print(person1.job)  # there is connection between classes and insttances """

#! class attributes vs instance attributes:

class Person:
    company = "clarusway"

person1 = Person()
person2 = Person()


# Class attributes should contain information that does not change according to instances.
# The information that will change according to the instances should be defined on the instances.

person1.location = "turkey"
person1.company = "tesla"
# print(person1.location)
print(person1.company)
print(person2.company)


#! special methods (dunder methods)

class Person:
    company = "clarusway"
    person_count = 0

    #  automatically runs when the instance is created
    def __init__(self, name, age, gender="male"):
        self.name = name
        self.age = age
        self.gender = gender
        Person.person_count = Person.person_count +1



    def get_details(self):
        print(f"{self.name} - {self.age} - {self.gender}")


person1 = Person("victor", 33)
person2 = Person("henry", 33)


person1.get_details()
print(Person.person_count)
# person2 = Person() #we must pass the arg when creating ins.

























print("--------------------------------------")
