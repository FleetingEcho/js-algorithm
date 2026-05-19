//分治 ; 我想的是stack;    分治这办法简直绝了。。
class Solution241 {
  private HashMap<String, List<Integer>> map = new HashMap<>();

  public List<Integer> diffWaysToCompute(String line) {
    if (map.containsKey(line))
      return map.get(line);
    List<Integer> res = new ArrayList<>();

    for (int i = 0; i < line.length(); i++) {
      int cur = line.charAt(i);

      if (cur == '-' || cur == '*' || cur == '+') {
        List<Integer> left = diffWaysToCompute(line.substring(0, i));
        List<Integer> right = diffWaysToCompute(line.substring(i + 1, line.length()));

        for (int num1 : left) {
          for (int num2 : right) {
            if (cur == '+')
              res.add(num1 + num2);
            else if (cur == '-')
              res.add(num1 - num2);
            else if (cur == '*')
              res.add(num1 * num2);
          }
        }

      }
    }

    if (res.size() == 0) {
      res.add(Integer.parseInt(line));
    }
    map.put(line, res);
    return res;
  }
}
