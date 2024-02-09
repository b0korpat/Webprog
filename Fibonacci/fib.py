def fibonacci(n: int) -> int:
    x = 0
    y = 1
    for i in range(0, n):
        x, y = y, x + y
    return x