import data from './../data/requirements'

const rearrangeSpecs = (system) => {
  return system.requirements.reduce(
    (specs, currentSpec) => {
      specs.min.push({ title: currentSpec.title, spec: currentSpec.min })
      specs.rec.push({ title: currentSpec.title, spec: currentSpec.rec })

      return specs
    },
    { min: [], rec: [] }
  )
}

const [windows, mac] = data

const { min: windowsMin, rec: windowsRec } = rearrangeSpecs(windows)
const { min: macMin, rec: macRec } = rearrangeSpecs(mac)

export const getSpecs = () => [
  {
    min: windowsMin,
    rec: windowsRec,
  },
  {
    min: macMin,
    rec: macRec,
  },
]
