from selenium import webdriver
from selenium.webdriver.common.by import By


def run_repl(driver, read=input, write=print):
    namespace = {'driver': driver, 'By': By}
    while True:
        try:
            command = read('>> ')
        except EOFError:
            break
        if command == 'q':
            write('Quitting...')
            break
        try:
            try:
                result = eval(command, namespace)
            except SyntaxError:
                result = exec(command, namespace)
            if result is not None:
                write(result)
        except Exception as e:
            write(f'{type(e).__name__}: {e}')


if __name__ == '__main__':
    browser = webdriver.Firefox()
    try:
        run_repl(browser)
    finally:
        browser.quit()
