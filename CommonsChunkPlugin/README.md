## Chunk

首先弄明白chunk是什么东西: webpack将多个模块打包之后的代码集合称为chunk.

**webpack里,chunk有三种类型:**

1. entry chunk: 含有webpack runtime代码的模块代码集合.
2. normal chunk: 不含runtime代码的模块集合
3. initial chunk: 文档里面说是一种特殊的normal chunk.在加载的时候顺序会在normal chunk前面.

webpack打包的代码都是以chunk的形式存储的.但是呢,不同chunk里可能存在相同的模块,CommonsChunkPlugin就是把这些不同chunk里重复的模块提取出来放到一个公共chunk里
.这个公共的chunk只需要下载一次,就可以让所有的chunk都使用了.

