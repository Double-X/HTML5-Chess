Written by: DoubleX
Written on: GMT 1000 27 Jan 2017
Version: v1.0

===================================================================================================================

1. The Chess folder's supposed to store all plugins and core modules that works on Chess only
2. As the event listeners are implemented in an Abstract module, any Chess module needs to extend at least 1
   abstract one in order to work
3. Any Chess plugin are loaded after loading all those of the abstract ones, so none of the latter can change any
   of the former
4. Some core modules will have both the abstract and concrete counterparts, which are analogous to abstract and 
   concrete classes
5. For plugins having both abstract and concrete modules, none of the former's supposed to be able to make use of
   any of the latter, so the latter should extend the former