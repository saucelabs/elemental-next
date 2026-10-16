## How to run this project

On the same directory as this file, run the following commands:

- `pip install -r requirements.txt`
- `pytest tagging.py` (runs only the `smoke` tests, see `pytest.ini`)
- `pytest tagging.py -m "not wip"` or `pytest tagging.py -m wip` to choose other tests
