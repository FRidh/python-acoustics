DOCS=docs

.PHONY: docs tests

FORMAT_FILES=acoustics $(DOCS)/conf.py setup.py

docs:
	cd $(DOCS) && $(MAKE) clean && $(MAKE) html

docs-online: docs
	ghp-import -np $(DOCS)/_build/html -r upstream

tests:
	py.test tests

clean:
	rm -rf dist
	find . -name __pycache__ | xargs rm -rf {}
	find . -name "*.pyc" | xargs rm -rf {}
	rm -rf acoustics.egg-info
	rm -rf build
	rm -rf .pytest_cache

format:
	yapf -ipr $(FORMAT_FILES)

sdist:
	python3 setup.py sdist

release: docs-online
	python3 setup.py sdist upload

