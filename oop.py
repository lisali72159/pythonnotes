# 4 Pillars of OOP
# - Encapsulation
# - Polymorphism
# 


class Dog:
    def __init__(self, name):
        self.name = name

    def talk(self):
        print self.name + ' borks'

class Cat:
    def __init__(self, name):
        self.name = name

    def talk(self):
        print self.name + ' meows'

def petTheAnimal(animal):
    animal.talk()

d = Dog('fido')
c = Cat('sen')

petTheAnimal(d)
petTheAnimal(c)


# Inheritance

class Animal:
    def eat(self):
        print(self.name + 'is eating')

class Dog(Animal):
    def __init__(self, name):
        self.name = name

    def talk(self):
        print self.name + ' borks'

class Cat(Animal):
    def __init__(self, name):
        self.name = name

    def talk(self):
        print self.name + ' meows'

d.eat()
# Abstraction