
def revArr():
    data=None
    li=[]
    i=0
    while data != '':
        data=input("ввод данных: ")
        if data != "":
           li.append(data)

    while i < len(li) // 2:
        li[i], li[len(li)-1-i], i = li[len(li)-1-i], li[i], i+1

    print(li)
    li.reverse()
    print(li)

"""
https://taskcode.ru/array/reverse
"""
