#Slicing strings

my_name = "alvin zablan"
print(my_name[1:7])

my_name = 'abcdefghijk'
print(my_name[2:8:5])
print(my_name[::-1])

# array == list
# object/hash == dictionary

for i in range(2, 10, 2):
    print(i) # 2, 4, 6, 8

# for loop is exclusive for the last number in the range. 
# third optional arg is a step

#Iterating through a range with a conditional.

arr = [i**2 for i in range(0, 10) if i % 2 == 0]
print(arr) # [ 0, 4, 16, 64 ]

#isPrime

def is_prime(n):
    if n < 2: return False
    for i in range(2, n):
        if n % i == 0: return False
    return True


print(is_prime(32))
print(is_prime(7))


def doubler(n):
    return 2 * n

arr = [doubler(i) for i in range(0, 10) if is_prime(i) ]

print(arr)

d = { i: i**2 for i in range(0, 10) if is_prime(i) }
print(d)

class Dog:
    def __init__(self, name, color):
        self.name = name
        self.color = color

    def bark(self):
        print(self.name + ' borks!')


    def woof(self):
        print(self + ' woof!')


    # these are instance methods
    
    

# Dog() is analagous to Dog.new in Ruby or new Dog() in JS.
# self is just an argument, not a keyword. First arg is just the self-referential argument. By convention, 'self' is used.

my_dog = Dog('fido', 'brown')
print(my_dog.name)
print(my_dog.color)
print(my_dog)

# No difference b/t class and instance methods in python.

my_dog = Dog('Fido', 'brown')
ur_dog = Dog('Strelka', 'white')

my_dog.bark()
ur_dog.bark()

# Must invoke explicitly. Use parentheses.

Dog.bark(my_dog)  #this is equivalent
my_dog.bark() # to this

class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

        a = Node('a')
        b = Node('b')
        c = Node('c')
        d = Node('d')
        e = Node('e')

        a.left = b 
        a.right = c 
        b.left = d 
        b.right = e  

        #         a
        #        / \
        #      b     c
        #    /   \
        #   d     e

        # depthFirst: a, b, d, e, c
        # breathFirst: a, b, c, d, e

        # Stack translates to breathFirst

        # Undefined is JS default. Null must be set, deliberate absence of value.

        def dfPrint(root):
             s = [root]
             while len(s) > 0:  # while the stack is not empty
                node = s.pop()
                print(node.val)
                # add the children to the top of the stack if they exist
                if node.right is not None: s.append(node.right)
                if node.left is not None: s.append(node.left)

        dfPrint(a)


