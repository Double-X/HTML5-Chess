Written by: DoubleX
Written on: GMT 1000 27 Jan 2017
Version: v1.0

===================================================================================================================

1. The Abstract Chess folder's supposed to store all plugins and core modules that works on both Chess and Chinese
   Chess
2. All Abstract Chess core modules are loaded before loading any those of the concrete ones, so none of the former
   should depend on any of the latter at all
3. All Abstract Chess plugin are loaded before loading any those of the concrete ones, so none of the former should
   depend on any of the latter at all
4. Some core modules will have both the abstract and concrete counterparts, which are analogous to abstract and 
   concrete classes
5. For plugins having both abstract and concrete modules, none of the former's supposed to be able to make use of
   any of the latter, so the latter should extend the former