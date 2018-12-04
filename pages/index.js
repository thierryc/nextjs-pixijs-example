import dynamic from 'next/dynamic'

const MyStageNoSSR = dynamic(() => import('./components/MyStage'), {
  ssr: false
});

export default () => (
  <div>
    <MyStageNoSSR/>
  </div>
)
