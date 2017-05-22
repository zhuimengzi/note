<template>
	<div class="panel">
		<div class="header topic_header">
      <span class="topic_full_title">
			<span class="put_top">置顶</span>
        cnpm@5 beta 测试招募
      </span>
			<div class="changes">
        <span>
          发布于 2 个月前
        </span>
        <span>
          作者 <a href="/user/fengmk2">fengmk2</a>
        </span>
        <span>
          17063 次浏览
        </span>
				<span> 来自 分享</span>
			</div>
		</div>
		<div class="inner topic">
			<div class="topic_content">
				<div class="markdown-text"><p><a href="https://github.com/cnpm/cnpm" target="_blank">cnpm cli</a> 的 install 速度已经是目前最快的一种 npm installer 了，最近 npm registry 推出了一种全新的 registry api 格式: <a href="https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md#abbreviated-metadata-format" target="_blank">Abbreviated metadata format</a>，它可以大大减少install 过程中的网络请求数据大小，于是我们也在第一时间实现到 npminstall 中了。</p>
					<p>为了更加平滑地更新过渡，我们计划使用2周时间来做beta测试，然后没什么大问题之后，将会发布正式版本的 cnpm<a href="/user/5" target="_blank">@5</a> 。</p>
					<h2>尝鲜者来</h2>
					<p>直接通过 beta 版本可以参与测试。</p>
					<pre class="prettyprint language-bash"><code><span class="pln">$ cnpm install cnpm@beta </span><span class="pun">-</span><span class="pln">g </span></code></pre><h2>问题反馈</h2>
					<p>遇到任何问题，请直接回复到 <a href="https://github.com/cnpm/cnpm/pull/187" target="_blank">https://github.com/cnpm/cnpm/pull/187</a> 。</p>
					<h2>回滚</h2>
					<p>一键回滚到稳定版本。</p>
					<pre class="prettyprint language-bash"><code><span class="pln">$ cnpm install cnpm </span><span class="pun">-</span><span class="pln">g</span></code></pre></div>
			</div>
		</div>
	</div>
</template>
