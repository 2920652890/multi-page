import Loading from '../components/partialLoad.vue'

const loadingDirective = {}
loadingDirective.install = Vue =>{
  const Mask = Vue.extend(Loading)

  const bind = (el,binding) =>{
    const mask = new Mask({
      el: document.createElement('div'),
    })
    el.style.position = 'relative'
    el.instance = mask
    mask.visible = binding.value
    el.append(mask.$el)
  }

  const update = (el,binding)=>{
    if (binding.oldValue !== binding.value){
      el.instance.visible = binding.value
    }
  }

  Vue.directive('heroLoading',{
    bind,
    update
  })
}

export default loadingDirective
/**
 * @premise Vue.use(heroLoading)
 * @mode    v-heroLoading="true"
 */