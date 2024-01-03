defmodule Solution do
  @spec contains_duplicate(nums :: [integer]) :: boolean
  def contains_duplicate(nums) do
    nums
    |> Enum.group_by(& &1)
    |> Enum.any?(fn {_, v} -> length(v) > 1 end)
  end
end

IO.puts(Solution.contains_duplicate([1, 2, 3, 1]))
