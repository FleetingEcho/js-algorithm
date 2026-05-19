import java.util.List;

/* 

在求装满背包有几种方法的情况下，递推公式一般为：


dp[j] += dp[j - nums[i]];
后面我们在讲解完全背包的时候，还会用到这个递推公式！


如何转化为01背包问题呢。

假设加法的总和为x，那么减法对应的总和就是sum - x。

所以我们要求的是 x - (sum - x) = S

x = (S + sum) / 2

此时问题就转化为，装满容量为x背包，有几种方法。
*/

class Solution {
    public int findTargetSumWays(int[] nums, int target) {
        int sum = 0;
        for (int i = 0; i < nums.length; i++)
            sum += nums[i];
        if ((target + sum) % 2 != 0)
            return 0;
        int size = (target + sum) / 2;
        if (size < 0)
            size = -size;

        // start
        int[] dp = new int[size + 1];// 方法数
        dp[0] = 1;
        for (int i = 0; i < nums.length; i++) {
            for (int j = size; j >= nums[i]; j--) {
                dp[j] += dp[j - nums[i]];
            }
        }
        return dp[size];
    }
}

/*
 * 
 * 背包,一个套路解决8题
 * https://leetcode-cn.com/problems/partition-equal-subset-sum/solution/yi-pian-
 * wen-zhang-chi-tou-bei-bao-wen-ti-a7dd/
 */

/*
 * 
 * 背包问题：
 * 背包问题是动态规划非常重要的一类问题，它有很多变种，但题目千变万化都离不开我根据力扣上背包问题的题解和一些大佬的经验总结的解题模板
 * 
 * 背包定义：
 * 那么什么样的问题可以被称作为背包问题？换言之，我们拿到题目如何透过题目的不同包装形式看到里面背包问题的不变内核呢？
 * 我对背包问题定义的理解：
 * 给定一个背包容量target，再给定一个数组nums(物品)，能否按一定方式选取nums中的元素得到target
 * 注意：
 * 1、背包容量target和物品nums的类型可能是数，也可能是字符串
 * 2、target可能题目已经给出(显式)，也可能是需要我们从题目的信息中挖掘出来(非显式)(常见的非显式target比如sum/2等)
 * 3、选取方式有常见的一下几种：每个元素选一次/每个元素选多次/选元素进行排列组合
 * 那么对应的背包问题就是下面我们要讲的背包分类
 * 
 * 背包问题分类：
 * 常见的背包类型主要有以下几种：
 * 1、0/1背包问题：每个元素最多选取一次
 * 2、完全背包问题：每个元素可以重复选择
 * 3、组合背包问题：背包中的物品要考虑顺序
 * 4、分组背包问题：不止一个背包，需要遍历每个背包
 * 
 * 而每个背包问题要求的也是不同的，按照所求问题分类，又可以分为以下几种：
 * 1、最值问题：要求最大值/最小值
 * 2、存在问题：是否存在…………，满足…………
 * 3、组合问题：求所有满足……的排列组合
 * 
 * 因此把背包类型和问题类型结合起来就会出现以下细分的题目类型：
 * 1、0/1背包最值问题
 * 2、0/1背包存在问题
 * 3、0/1背包组合问题
 * 4、完全背包最值问题
 * 5、完全背包存在问题
 * 6、完全背包组合问题
 * 7、分组背包最值问题 --以下不常考
 * 8、分组背包存在问题
 * 9、分组背包组合问题
 * 这九类问题我认为几乎可以涵盖力扣上所有的背包问题
 * 
 * 背包问题解题模板
 * 首先先了解一下原始背包问题的解题思路和代码：
 * 最开始的背包问题是二维动态规划
 * 
 */

// weight 统一称为target
class Solution2 {
    int[] weight = new int[] { 1, 3, 4 }; // 各个物品的重量
    int[] value = new int[] { 15, 20, 30 }; // 对应的价值

    public int bags() {
        int target = 4; // 背包最大重量
        // 二维数组：状态定义:dp[i][j]表示从0-i个物品中选择不超过j重量的物品的最大价值
        int[][] dp = new int[weight.length + 1][target + 1];
        // 初始化:第一列都是0，第一行表示只选取0号物品最大价值
        for (int j = target; j >= weight[0]; j--) {
            dp[0][j] = dp[0][j - weight[0]] + value[0];
        }

        // weight数组的大小 就是物品个数
        for (int i = 1; i < weight.length; i++) // 遍历物品(第0个物品已经初始化)
        {
            for (int j = 0; j <= target; j++) // 遍历背包容量
            {
                if (j < weight[i]) // 背包容量已经不足以拿第i个物品了
                    dp[i][j] = dp[i - 1][j]; // 最大价值就是拿第i-1个物品的最大价值
                // 背包容量足够拿第i个物品,可拿可不拿：拿了最大价值是前i-1个物品扣除第i个物品的 重量的最大价值加上i个物品的价值
                // 不拿就是前i-1个物品的最大价值,两者进行比较取较大的
                else
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
            }
        }
        return dp[weight.length - 1][target];// 最大价值
    }

}

/*
 * 
 * 二维代码可以进行优化，去除选取物品的那一层，简化为一维背包
 * // 一维
 * //状态定义：dp[j]表示容量为j的背包能放下东西的最大价值
 * 
 */

class Solution3 {
    int[] weight = new int[] { 1, 3, 4 }; // 各个物品的重量
    int[] value = new int[] { 15, 20, 30 }; // 对应的价值

    public int bag() {
        int target = 4;
        int[] dp = new int[target + 1];
        for (int i = 0; i < weight.length; i++) { // 遍历物品
            for (int j = target; j >= weight[i]; j--) { // 遍历背包容量(一定要逆序)
                dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]); // 不取或者取第i个
            }
        }
        return dp[target];
    }
}

// https://leetcode-cn.com/problems/word-break/solution/dai-ma-sui-xiang-lu-139-dan-ci-chai-fen-50a1a/
/*
 * https://leetcode-cn.com/problems/word-break/solution/yi-tao-kuang-jia-jie-jue
 * -bei-bao-wen-ti-kchg9/
 * 01 背包问题：
 * 最基本的背包问题就是 01 背包问题：一共有 N 件物品，第 i（i 从 1 开始）件物品的重量为 w[i]，价值为 v[i]。在总重量不超过背包承载上限
 * W 的情况下，能够装入背包的最大价值是多少？
 * 
 * 完全背包问题：
 * 完全背包与 01 背包不同就是每种物品可以有无限多个：一共有 N 种物品，每种物品有无限多个，第 i（i 从 1 开始）种物品的重量为 w[i]，价值为
 * v[i]。在总重量不超过背包承载上限 W 的情况下，能够装入背包的最大价值是多少？
 * 可见 01 背包问题与完全背包问题主要区别就是物品是否可以重复选取。
 * 
 * 背包问题具备的特征：
 * 是否可以根据一个 target（直接给出或间接求出），target 可以是数字也可以是字符串，再给定一个数组 arrs，问：能否使用 arrs
 * 中的元素做各种排列组合得到 target。
 * 
 * 背包问题解法：
 * 01 背包问题：
 * 如果是 01 背包，即数组中的元素不可重复使用，外循环遍历 arrs，内循环遍历 target，且内循环倒序:
 * 
 * 完全背包问题：
 * （1）如果是完全背包，即数组中的元素可重复使用并且不考虑元素之间顺序，arrs 放在外循环（保证 arrs 按顺序），target在内循环。且内循环正序。
 * （2）如果组合问题需考虑元素之间的顺序，需将 target 放在外循环，将 arrs 放在内循环，且内循环正序。
 * 
 */

/*
 * 
 * 分类解题模板
 * 背包问题大体的解题模板是两层循环，分别遍历物品nums和背包容量target，然后写转移方程，
 * 根据背包的分类我们确定物品和容量遍历的先后顺序，根据问题的分类我们确定状态转移方程的写法
 * 
 * 首先是背包分类的模板：
 * 1、0/1背包：外循环nums,内循环target,target倒序且target>=nums[i];
 * 2、完全背包：外循环nums,内循环target,target正序且target>=nums[i];
 * 3、组合背包：外循环target,内循环nums,target正序且target>=nums[i]; // sum和， 硬币
 * 4、分组背包：这个比较特殊，需要三重循环：外循环背包bags,内部两层循环根据题目的要求转化为1,2,3三种背包类型的模板
 * 
 * 然后是问题分类的模板：
 * 1、最值问题: dp[i] = max/min(dp[i], dp[i-num]+1) --注意最大最下值 的越界问题。
 * 或 dp[i] =max/min(dp[i],dp[i-num]+ value);
 * 2、存在问题(bool)：dp[i]=dp[i]||dp[i-num];
 * 3、组合问题：dp[i]=dp[i] + dp[i-num];
 * 
 * 这样遇到问题将两个模板往上一套大部分问题就可以迎刃而解
 * 
 */

// 322.Coin Change 完全背包+ 最值问题
class Solution322 {
    public int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        for (int i = 0; i < dp.length; i++) {
            dp[i] = amount + 100;// 如果取maxValue,就要判断是否越界。最好取不到越界值。
        }
        dp[0] = 0;
        for (int coin : coins) {
            for (int target = 0; target <= amount; target++) {
                if (target - coin >= 0) {
                    // if(dp[target-coin]==Integer.MAX_VALUE){continue;}//处理越界
                    dp[target] = Math.min(dp[target], dp[target - coin] + 1);
                }
            }
        }
        return dp[amount] == amount + 100 ? -1 : dp[amount];
    }
}

// 使用MAX_VALUE; 完全背包+最值问题；
class Solution322_1 {
    public int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        for (int i = 0; i < dp.length; i++) {
            dp[i] = Integer.MAX_VALUE;// 如果取maxValue,就要判断是否越界。最好取不到越界值。
        }
        dp[0] = 0;
        for (int coin : coins) {
            for (int target = 0; target <= amount; target++) {
                if (target - coin >= 0) {
                    if (dp[target - coin] == Integer.MAX_VALUE) {
                        continue;
                    } // 处理越界
                    dp[target] = Math.min(dp[target], dp[target - coin] + 1);
                }
            }
        }
        return dp[amount] == Integer.MAX_VALUE ? -1 : dp[amount];
    }
}

// 416. Partition Equal Subset Sum 0-1背包 + 存在问题。

class Solution416 {
    public boolean canPartition(int[] nums) {
        int sum = 0;
        for (int i = 0; i < nums.length; i++)
            sum += nums[i];
        if (sum % 2 != 0) {
            return false;
        } // not 2 groups;
          // start
        int size = sum / 2;
        boolean[] dp = new boolean[size + 1];// 方法数
        dp[0] = true; // 是否存在子集和为size;
        for (int lastSum : nums) {
            for (int j = size; j >= lastSum; j--) {
                dp[j] = dp[j] || dp[j - lastSum];
            }
        }
        return dp[size];

    }
}

// 494. Target Sum 0-1背包不考虑元素顺序的组合问题
class Solution494 {
    public int findTargetSumWays(int[] nums, int s) {
        int sum = 0;
        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
        }
        // x+y=target ; x+(-y)=sum; => x+ x-target=sum => x=(target+sum)/2, 累加和是x;
        // 一直加即可；
        if ((sum + s) % 2 != 0 || s > sum) {
            return 0;
        }
        int target = (sum + s) / 2;
        if (target < 0) {
            return 0;
        }
        int[] dp = new int[target + 1];
        dp[0] = 1;// 方法数
        for (int num : nums) {
            for (int i = target; i >= 0; i--) {
                if (i >= num) {
                    dp[i] = dp[i] + dp[i - num];
                }
            }
        }

        return dp[target];
    }
}

// 279. Perfect Squares 完全背包+最值问题
// 完全背包的最值问题：完全平方数最小为1,最大为sqrt(n),故题目转换为在nums=[1,2.....sqrt(n)]中选任意数平方和为target=n

class Solution279 {
    public int numSquares(int n) {
        int target = n;
        int arrLength = (int) Math.sqrt(target);
        int[] dp = new int[target + 1];
        for (int i = 0; i < dp.length; i++) {
            dp[i] = Integer.MAX_VALUE;
        }
        dp[0] = 0;
        for (int num = 1; num <= arrLength; num++) {
            for (int i = 0; i <= target; i++) {
                int lastSum = num * num;
                if (i - lastSum >= 0) {
                    if (dp[i - lastSum] == Integer.MAX_VALUE) {
                        continue;
                    } // 处理越界
                    dp[i] = Math.min(dp[i], dp[i - lastSum] + 1);
                }
            }
        }
        return dp[target];
    }
}

// 377. Combination Sum IV 考虑顺序的组合问题：外循环target,内循环nums,应用状态方程3

class Solution377 {
    public int combinationSum4(int[] nums, int target) {
        int[] dp = new int[target + 1];
        dp[0] = 1;
        for (int i = 0; i <= target; i++) {
            for (int num : nums) {
                if (i - num >= 0) {
                    dp[i] += dp[i - num];
                }
            }
        }

        return dp[target];
    }
}

// 完全背包不考虑顺序的组合问题
class Solution518 {
    public int change(int amount, int[] coins) {
        // 完全背包+ 组合
        int[] dp = new int[amount + 1];
        dp[0] = 1;
        for (int coin : coins) {
            for (int i = 0; i <= amount; i++) {
                if (i - coin >= 0) {
                    dp[i] += dp[i - coin];
                }
            }
        }
        return dp[amount];
    }
}

// 1049. Last Stone Weight II 0/1背包最值问题：外循环stones,内循环target=sum/2倒叙,应用转移方程1
/*
 * 最后一块石头的重量：从一堆石头中,每次拿两块重量分别为x,y的石头,若x=y,则两块石头均粉碎;若x<y,两块石头变为一块重量为y-
 * x的石头求最后剩下石头的最小重量(若没有剩下返回0)
 * 问题转化为：把一堆石头分成两堆,求两堆石头重量差最小值
 * 进一步分析：要让差值小,两堆石头的重量都要接近sum/2;我们假设两堆分别为A,B,A<sum/2,B>sum/2,若A更接近sum/2,
 * B也相应更接近sum/2
 * 进一步转化：将一堆stone放进最大容量为sum/2的背包,求放进去的石头的最大重量MaxWeight,最终答案即为sum-2*MaxWeight;、
 */

class Solution1049 {
    public int lastStoneWeightII(int[] stones) {
        int sum = 0;
        for (int val : stones) {
            sum += val;
        }
        int target = sum / 2;
        int[] dp = new int[target + 1];
        for (int num : stones) {
            for (int i = target; i - num >= 0; i--) {
                dp[i] = Math.max(dp[i], dp[i - num] + num);
            }
        }
        return sum - dp[target] * 2;
    }
}

// 1155. Number of Dice Rolls With Target Sum
/*
 * 投掷骰子的方法数：d个骰子,每个有f个面(点数为1,2,...f),求骰子点数和为target的方法
 * 分组背包的组合问题：dp[i][j]表示投掷i个骰子点数和为j的方法数;三层循环：最外层为背包d,然后先遍历target后遍历点数f
 * 应用二维拓展的转移方程3：dp[i][j]+=dp[i-1][j-f];
 */
class Solution1155 {
    public int numRollsToTarget(int n, int k, int target) {
        int[][] dp = new int[n + 1][target + 1];
        int mod = (int) Math.pow(10, 9) + 7;
        dp[0][0] = 1;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= target; j++) {
                // k is maxNum of dice;
                for (int m = 1; m <= k; m++) {
                    if (j - m >= 0) {
                        dp[i][j] += dp[i - 1][j - m];// 方法和，上一步的方法+本步方法。
                        dp[i][j] %= mod;
                    }
                }
            }
        }
        return dp[n][target];
    }
}

// 474. Ones and Zeroes 分组背包， 子背包是0-1问题；
// https://leetcode-cn.com/problems/ones-and-zeroes/
class Solution474 {
    public int findMaxForm(String[] str, int m, int n) {
        int[][] dp = new int[m + 1][n + 1];
        for (String ss : str) {
            int[] cur = getZerosOnes(ss);
            int zeros = cur[0], ones = cur[1];
            // 核心部分
            for (int j = m; j - zeros >= 0; j--) {
                for (int k = n; k - ones >= 0; k--) {
                    dp[j][k] = Math.max(dp[j][k], dp[j - zeros][k - ones] + 1);
                }
            }
        }
        return dp[m][n];
    }

    public int[] getZerosOnes(String str) {
        int[] zerosOnes = new int[2];
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == '0') {
                zerosOnes[0]++;
            } else {
                zerosOnes[1]++;
            }
        }
        return zerosOnes;
    }
}

// 139. Word Break 完全背包+ 存在问题

class Solution139 {
    public boolean wordBreak(String s, List<String> wordDict) {
        int n = s.length();
        boolean[] dp = new boolean[n + 1];
        dp[0] = true;
        for (int i = 0; i <= n; i++) {
            for (String str : wordDict) {
                int len = str.length();
                // str是否匹配;
                if (i >= len && str.equals(s.substring(i - len, i))) {
                    dp[i] = dp[i] || dp[i - len];
                }
            }
        }
        return dp[n];
    }
}