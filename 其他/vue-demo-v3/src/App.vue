<template>
    <div id="app">
        <com-header></com-header>
        <com-main></com-main>
        <com-footer></com-footer>
    </div>
</template>
<script>
    import Header from './components/header'
    import Main from './components/main'
    import Footer from './components/footer'

    export default{
        components: {
            comHeader: Header,
            comMain: Main,
            comFooter: Footer
        }
    }
</script>