import pytest


@pytest.hookimpl(wrapper=True)
def pytest_runtest_makereport(item, call):
    report = yield
    # Store the report of each phase (setup, call, teardown) on the test, so fixtures can check the outcome.
    setattr(item, f'report_{report.when}', report)
    return report
