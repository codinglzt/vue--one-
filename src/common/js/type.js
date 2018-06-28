export function getCategoryByType (type) {
  const map = {
    '0': '插画',
    '1': 'ONE STORY',
    '2': '连载',
    '3': '问答',
    '4': '音乐',
    '5': '影视'
  }
  return type ? map[type] : ''
}
