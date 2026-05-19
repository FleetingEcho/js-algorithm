import java.util.ArrayDeque;
import java.util.Deque;

class Solution227 {
  int start = 0;

  public int calculate(String s) {
    int total = 0;
    char sign = '+';
    // Stack<Integer> stack = new Stack<>();
    Deque<Integer> stack = new ArrayDeque<Integer>();
    for (; start < s.length(); start++) {
      char cur = s.charAt(start);
      if (Character.isDigit(cur)) {
        total = 10 * total + cur - '0';
      }
      if (cur == '(') {
        start++;
        total = calculate(s);
      }
      if ((!Character.isDigit(cur) && cur != ' ') || start == s.length() - 1) {
        switch (sign) {
          case '+':
            stack.push(total);
            break;
          case '-':
            stack.push(-total);
            break;
          case '*':
            stack.push(stack.pop() * total);
            break;
          case '/':
            stack.push(stack.pop() / total);
            break;
        }
        sign = cur; // update the sign;
        total = 0;
        if (sign == ')')
          break;
      }
    }
    int res = 0;
    while (!stack.isEmpty())
      res += stack.pop();
    return res;
  }
}