#!/bin/bash
# 市集数据自动更新脚本

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

echo "=========================================="
echo "开始更新市集活动数据..."
echo "时间: $(date '+%Y-%m-%d %H:%M:%S')"
echo "=========================================="

# 运行爬虫
python3 scraper.py

# 检查是否有数据更新
if [ -f "markets_data.json" ]; then
    DATA_COUNT=$(python3 -c "import json; print(len(json.load(open('markets_data.json'))))")
    echo "已加载 $DATA_COUNT 条市集数据"
    
    # 提交到 Git
    git add markets_data.json
    git commit -m "chore: 更新市集数据 $(date '+%Y-%m-%d')" || echo "没有数据变更"
    
    # 推送到 GitHub（触发 Render 自动部署）
    git push origin master
    
    echo "=========================================="
    echo "更新完成！"
    echo "=========================================="
else
    echo "错误: 数据文件不存在"
    exit 1
fi